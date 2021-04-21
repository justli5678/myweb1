
//命名函数，有完整的参数和返回类型。可以不用，TS将自动进行类型推断但推荐使用！
function add(x: number, y: number): number {
    return x + y;
  }
  //匿名函数
  let myAdd = function(x: number, y: number): number { return x + y; };
  console.log(myAdd(1, 2));//error
  console.log(myAdd(1,2));//error
  console.log(typeof myAdd(1, 2));//number 