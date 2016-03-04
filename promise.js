var a = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(3)
  }, 550)
})

a.then(function() {
  console.log('ok', arguments)
  return 333;
}, function() {
  console.log('fail', arguments)
  throw Error('abc');
}).then(function() {
  console.log('ok222', arguments)
}, function() {
  console.log('fail2', arguments)
  return 444;
})