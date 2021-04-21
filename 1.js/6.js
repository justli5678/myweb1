//链式语法
var bird = {//定义对象字面量
    catapult: function() {
      console.log( 'Yippeeeeee!' );
      return this;//返回bird对象自身
    },
    destroy: function() {
      console.log( "That'll teach you... you dirty pig!" );
      return this;
    }
  };
  bird.catapult().destroy();//destroy()后还可以再链接吗？