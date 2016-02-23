post = {
	"title": "My blog post",
	"content": "here's my blog",
	"date": new Date()
}
db.blog.insert(post)

var post = db.blog.findOne()
post.comments = []
db.blog.update({title:"My blog post"},post)

var collections = ["posts","comments","authors"];
for(i in collections){
	doStuff(db.blog[collections]);
}
{
	"name":"John Doe",
	"address":{
		"street":"123 Park Street",
		"city"："Anytown",
		"state":"NY"
	}
}

db.games.insert({"game":"pinball","user":"joe"})
db.games.update({"game":"pinball","user":"joe"},
	{"$inc":{"score":50}})

var post = { "title":"A blog post",
		"content":"..."}

db.blog.posts.insert(post);
db.blog.posts.update({
	"title": "A blog post"
}, {
	$push: {
		"comments": {
			"name": "joe",
			"email": "joe@example.com",
			"content": "nice post."
		}
	}

})

var user = {
	"username": "joe",
	"emails": ["joe@example.com", "joe@gmail.com", "joe@yahoo.com"]
}

db.users.insert(user);
db.users.update(user,{$addToSet:{"emails":"joe@gmail.com"}})

var post = db.blog.posts.findOne();
var user =
{
	"username": "zxl",
	"emails": ["zxl@qq.com"],
	"age":34
};
db.users.insert(user);
//删除一列

var user = db.users.find({"_id":ObjectId("5437a53b597ef119ac081bfc")});
db.users.update(user,{$unset:{"name":"gxb"}});
delete user.name;
db.users.update({"name":"gxb"},user);
//update
{
	"username": "joe"
} 

{
	$set :{"age": 33,"username":'gxb'	}
}
{$unset:{"name":"gxb"}}