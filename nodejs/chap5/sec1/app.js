var express = require('express');
var fs = require('fs');
var app = express();

var marked = require('marked');
var pygmentize = require('pygmentize-bundled');

//设置pygmentize-bundled来做代码高亮转换
marked.setOptions({
  highlight: function (code, lang, callback) {
    pygmentize({ lang: lang, format: 'html' }, code, function (err, result) {
      callback(err, result.toString());
    });
  }
});

//自定义方法，接收md文件内容，返回一个包含转换结果的回调函数
function markdown2html(data, callback) {
  marked(data, function (err, content) {
    return callback(err, content);
  });
}
function getBlogList(blogDir, callback) {
	fs.readdir(blogDir, function(err, files) {
		var blogList = [];
		if (files && files.length) {
			files.forEach(function(filename) {
				//split file name and generate url...
				// 2015-08-13-hello.md
				// 2015-08-13-test.md
				var length = filename.length;
				filename = filename.substring(0, length - 3);
				var nameArr = filename.split('-');
				var title = nameArr[nameArr.length - 1];
				var url = nameArr.join('/');
				//create a blogItem { title: blogTitle, url: blogUrl }
				var blogItem = {
					title: title,
					url: '/blog/' + url
				};

				blogList.push(blogItem);
			});
		}
		// return blogList;
		callback(blogList);
	});
}
app.get('/blog/:year/:month/:day/:title', function(req, res) {
	var fileName =
		'./blogs/' +
		req.params.year + '-' +
		req.params.month + '-' +
		req.params.day + '-' +
		req.params.title + '.md';
	fs.readFile(fileName, 'utf-8', function(err, data) {
		if (err) {
			res.send(err);
		}
		markdown2html(data, function(err, content) {
			if (err) res.send(err);
			res.send(content);
		});
		// res.send(data);
	});
});
app.get('/', function(req, res) {
	var html = '';
	// var blogList = getBlogList('./blogs');
	getBlogList('./blogs', function(blogList) {
		// You can get blog list here.
		if (blogList && blogList.length) {
			blogList.forEach(function(blog) {
				html += '<a href="' + blog.url + '">' + blog.title + '</a><br/>';
			});
			res.send(html);
		} else {
			res.send('No Blogs Found.');
		}
	});

});
app.listen(3000);