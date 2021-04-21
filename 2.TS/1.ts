//无参数，函数体代码只有一行，则该行结果即为函数返回值
let greeting3 = () => `Hello TS!`;
console.log(greeting3());
//一个参数，函数体代码只有一行，则该行结果即为函数返回值
let greeting4 = (name: string) => `Hello ${name}`;
console.log(greeting4('QiGe'));
//两个及以上的参数，函数体代码只有一行，则该行结果即为函数返回值
let add1 = (n1: number, n2: number) => n1 + n2;
console.log(add1(1, 2));
//两个及以上的参数，函数体代码多于一行,则必须用{}包裹，且显式给出return
let add2 = (n1: number, n2: number) => {
  let sum = n1 + n2;
  return sum;//改为sum++结果如何？
}
console.log(add2(1, 2));
          