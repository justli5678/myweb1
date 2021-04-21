
//getter和setter
class MyInfo { //class是关键字，类名默认全部大写首字母
    private readonly _name: string; //私有属性，外部不可访问。readonly使其只能在初始化时赋值，以后不可更改。    
    private _weather: string; //私有属性，习惯以_开头进行命名
  
    constructor(name: string, weather: string){ //构造函数，一般用于初始化
      this._name = name;
      this._weather = weather;
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {  //error！ _name有readonly属性
    //   this._name = value;
    }
    get weather(): string {
      return this._weather;
    }
    set weather(value: string) {
      this._weather = value;
    } 
  }
    
  let myData = new MyInfo('QiGe', 'raining'); //使用new关键字生成对象
  console.log(myData.name, myData.weather);
  myData.weather = 'sunny'; //OK
  myData.name = 'Wang'; //error!
  console.log(myData);
            