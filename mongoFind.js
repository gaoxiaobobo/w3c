// 4.1.1 指定返回的键
//不返回"id"
db.users.find({},{"username":1,"_id":0})
// 大于等于18 小于等于 33
db.users.find({age:{$gte : 18,$lte : 30}})
//数组
db.users.find({emails:"zxl@qq.com"})
db.users.find({emails:/@qq.com$/})
db.users.find(criteria,{emails:{$slice:[2,3]}})
//分2步 {find},{fields}
db.users.find({},{emails:{$slice:[2,3]}})


// 查询内嵌文档