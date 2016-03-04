// var http = require('http');
// http.createServer(function (req,res) {
//  res.writeHead(200,{"Content-Type":"text/html"});
//  res.write('<h1>nodejs</h1>');
//  res.end('<p>hello world</p>');  
// }).listen(3000);
// console.log('port at 3000s');
// var fs = require('fs');
// fs.readFile('d:\\wbx.txt','utf-8',function  (error,data) {
//  if(error){
//    console.error(error);
//  }else{
//    console.log(data);
//  }
// })
// console.log('end');

// 引入hello模块:
var greet = require('./hello');

var s = 'Michael';

greet(s); // Hello, Michael!
