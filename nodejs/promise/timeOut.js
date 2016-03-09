function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms, 'done');
    reject("xxx");
  });
}

timeout(100).then(function(value){
  console.log(value);
},function(err){
  console.log(err);
});