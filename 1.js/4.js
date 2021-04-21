
var colors = ['red', 'green', 'blue', 'brown'];	//colors是一个数组
//传统遍历（基本不用了）
var len=colors.length;
for(var i=0;i<len;i++){
  console.log(colors[i]);
}
//for-in，专注下标
for(var c in colors){
  console.log(colors[c]);
}
//for-of，专注元素
for(var c of colors){
  console.log(c);
}
//高级遍历
colors.forEach(c => console.log(c));
var other = colors.map(c => c + 'X');//map不仅遍历，还返回另一个数组
console.log(other);