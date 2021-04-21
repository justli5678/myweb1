
//剩余参数，会被当做个数不限的可选参数。可以一个都没有，也可以有任意个
function greeting2(firstName: string, ...restName: string[]) {
    return `Hello ${firstName} ${restName.join(' ')}!`;
  }
  console.log(greeting2('Osama', 'bin', 'Muhammad', 'bin', 'Awad', 'bin', 'Laden'));
  console.log(greeting2('Laden'));
            