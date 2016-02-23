 //修改默认设置
    
$(document).ready(function() {
	var jsonData = {name:'zxl'};
   
     
    $(function(){
        // 发送一个GET请求到 http://localhost:8080/rest/my_resources/100
        // 请求时 url 中的占位符 {id} 会自动被 urlParams 中的同名属性替换掉
        $.rest.get({
            url: 'http://localhost:8080/rp/portal/user/{name}.do',
            urlParams: {name:'gxb'},
            success: function(data){
                alert(data.result);
            }
        });
    });
});