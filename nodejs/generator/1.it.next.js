"use strict"
var count = 1;
function log(...v){
  console.log(count++, v);
}

function* god(){
  log(1);
  var a = yield 'a';
  // log(2, a);
  log(2);
  var b = yield 'b';
  log(3);
}

log('aa');
var it = god();
log('bb');
log(it.next());//1

log(it.next());
log(it.next());
// log(it.next());
log('end');

