{
	文件名: "变形金刚1",
	文件路径: "",
	层级标签: "",
	相关人物: [{
		作者（导演）: "迈克尔贝",
		上传者: "primaryx",
	}
	相关文件: [{
		文件名: "变形金刚2",
		文件路径
	}, {
		文件名: "变形金刚3",
		文件路径
	}],
	相关属性: {
		标签: ["a", "b", "d"],
		评价数
		阅读(播放)数:1584 0000,
		下载数
		评论: [{
			评论人
			评论内容
			评论时间
		}, {}]
	}
}

小学教育>语文>三年级>上册

我们的民族小学.ppt
金色的草地.ppt

小学教育>语文>三年级>下册

燕子.ppt
咏柳.doc

小学教育>数学>三年级>上册

毫米和分米的认识
千米的认识

var pathFile=
	[{
		"tagPath": "小学教育>语文>三年级>上册",
		"files": [{
			"fileId": "primary-chinese-03-01-001",
			"fileName": "我们的民族小学.ppt"
		}, {
			"fileId": "primary-chinese-03-01-002",
			"fileName": "我们的民族小学.ppt"
		}]
	}, {
		"tagPath": "小学教育>语文>三年级>下册",
		"files": [{
			"fileId": "primary-chinese-03-02-001",
			"fileName": "燕子.ppt"
		}, {
			"fileId": "primary-chinese-03-02-002",
			"fileName": "咏柳.ppt"
		}]
	}, {
		"tagPath": "小学教育>数学>三年级>上册",
		"files": [{

			"fileId": "primary-math-03-01-001",
			"fileName": "毫米和分米的认识.ppt"

		},{

			"fileId": "primary-math-03-01-002",
			"fileName": "千米的认识.ppt"

		}]
	}];
db.pathFile.insert(pathFile);
db.pathFile.find({tagPath:/数学/i})


 var tagPath = [
	{id:1, pId:0, name: "小学教育"},
	{id:2, pId:1, name: "语文"},
	{id:3, pId:1, name: "数学"},
	{id:4, pId:2, name: "三年级"},
	{id:5, pId:3, name: "三年级"},
	{id:6, pId:4, name: "上册"},
	{id:7, pId:5, name: "上册"}
];

db.pathFile.insert(tagPath);

//首先创建一个自动增长id集合 ids
 
>db.tagPathIds.save({name:"tagPath", id:0});
 
//可以查看一下是否成功
 
> db.tagPathIds.find();
{ "_id" : ObjectId("4c637dbd900f00000000686c"), "name" : "tagPath", "id" : 0 }
 
//然后每次添加新用户之前自增一下 ids集合 获得id
 
>tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
{ "_id" : ObjectId("4c637dbd900f00000000686c"), "name" : "tagPath", "id" : 1 }
 
//注：因为findAndModify是一个方法完成更新查找两个操作，所以具有原子性，多线程不会冲突。
 
//然后保存相应的数据
 
>db.tagPath.save({id:tagPathId.id, pId:"0", name: "小学教育"});

tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"1", name: "语文"});
 
tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"1", name: "数学"});

tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"2", name: "三年级"});

tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"3", name: "三年级"});

tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"4", name: "上册"});

tagPathId = db.tagPathIds.findAndModify({update:{$inc:{"id":1}}, query:{"name":"tagPath"}, new:true});
db.tagPath.save({id:tagPathId.id, pId:"5", name: "上册"});
//查看结果
 
> db.tagPath.find();
{ "_id" : ObjectId("4c637f79900f00000000686d"), "uid" : 1, "username" : "admin", "password" : "admin" }

新建分类
  层级id 第几层（1，2，3） 名称 （科目，版本，年级）
  层级内容 _id pId level name (语文，数学)
{level:{$in:[1,2]}}
var tagPath = [
{
	level:1,name:"科目",lists:[
		{id:"1_1",pId:"0",level:1,name:"语文"},
		{id:"1_2",pId:"0",level:1,name:"数学"}
	]
},
{
	level:2,name:"版本",lists:[
		{id:"2_1",pId:"1_1",level:2,name:"人教版"},
		{id:"2_2",pId:"1_1",level:2,name:"鲁教版"},
		{id:"2_3",pId:"1_2",level:2,name:"人教版"}
	]
}];
db.tagPath.insert(tagPath);


var tagPath = [
	{level:1,title:"科目",id:"1_0"},
	{level:1,name:"语文",id:"1_1",pId:"0"},
	{level:1,name:"数学",id:"1_2",pId:"0"},

	{level:2,title:"版本",id:"2_0"},
	{level:2,name:"人教版",id:"2_1",pId:"1_1"},
	{level:2,name:"鲁教版",id:"2_2",pId:"1_1"},
	{level:2,name:"人教版",id:"2_3",pId:"1_2"}
];
db.tagPath.insert(tagPath);

查询语文版本
db.tagPath.find(
{"pId":"1_1"}
,
{
	"lists": {$elemMatch: {"pId": "1_1"}}
}
)
http://localhost:9527/ce/html/views/space/resource.html
http://localhost:9527/ce/html/main.html