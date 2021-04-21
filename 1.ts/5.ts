
//可选参数，必须放在必要参数后
function greeting1(firstName: string, lastName?: string) {
    if(lastName) {
        return `Hello ${firstName} ${lastName}!`;//用''构成一个字符串
    }
    return `Hello ${firstName}!`;
  }
  console.log(greeting1('QiGe'));
  console.log(greeting1('QiGe', 'Wang'));
  console.log(greeting1('QiGe', 'Wang'));//error!
            