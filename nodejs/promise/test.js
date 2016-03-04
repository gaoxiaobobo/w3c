function* gen(x){
  var y = yield x + 2;
  return y;
}
var g = gen(1);
console.log(g);
 
console.log(g.next());// { value: 3, done: false }

console.log(g.next());// { value: undefined, done: true }