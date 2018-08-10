const max = process.argv[2];
var FizzBuzz =  {
  [Symbol.iterator]() {
    let item = 0;
    return {
      next() {
        item++;
        let ret = [];
        if (item % 3 === 0)
          ret.push('Fizz');
        if (item % 5 === 0)
          ret.push('Buzz');
        if (item > max)
          return { done: true };
        return { done: false, value: ret.join('') || item };
      }
    }
  }
}

for(var n of FizzBuzz) {
  console.log(n);
}