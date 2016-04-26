'usr strict'
function fun(num,callback){  

    if(num<0)  {   
        console.log("调用 A 层函数处理!");  
        console.log("数据不能为负, 输入错误!");   
    }else if(num==0){  
        console.log("调用 A 层函数处理!");  
        console.log("该数据项不存在！");  
    }else{  
        console.log("调用 B 层函数处理!");  
        callback(1);  
    }  

}  

function test(n){  
    var num=n;
    fun(num,function(back){ // 匿名 B 层处理函数  
　　　　console.log(":"+back);  
        if(num<2)   
            console.log("数字为 1");  
        else if(num<=3)   
            console.log("数字为 2 或 3！");  
        else   
            console.log("数字大于 3!");   
    })  
 }  
 test(2)
