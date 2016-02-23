'use strict';

function f1() {　　　　
    var n = 999;　　　　
    function f2() {　　　　　　
        return n;　　　　
    }　　　　
    return f2;　　
}　　
var result = f1();　　
var n1 = result(); // 999
console.log(n1);

