var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log("a:",result);
  console.log("b:",result.bio);
}
var g = gen();
var result = g.next();
// console.log("next1",result);

result.value.then(function(value) {

   console.log("a:",value);
  }, function(reason) {
    console.log(reason);
  // 拒绝
});