const max = process.argv[2];
let FizzBuzz = function*() {
  let i = 1;
  while(max >= i) {
    let res = i;
    i++;
    if(res % 15 === 0) {
      res = 'FizzBuzz';
    } else if(res % 3 === 0) {
      res = 'Fizz'
    } else if(res % 5 === 0) {
      res = 'Buzz';
    }
    yield res;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}