var scope = 'global scope';	//全局变量
function checkScope(){
    var scope = 'local scope';	//局部变量
    function f(){
        return scope;
    }
    return f;
}
console.log(checkScope()());		//注意此处的使用方法。返回值为local scope而非global scope