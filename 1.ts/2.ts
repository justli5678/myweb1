let lang: string = 'TypeScript';//如果省略类型说明，TS也可进行自动推断
lang = 1010;//error! 如果需要可以使用联合类型：let lang: number | string = 'TS';
let age: number = 89;
let age = 64;//error!

const pi: number = 3.14159;//pi以后不可改变，类似常量
const a=[];
a[2]=3;