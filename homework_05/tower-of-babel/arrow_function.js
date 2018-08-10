var inputs = process.argv.slice(2);
var result = inputs.map((elem) => elem.substring(0, 1)).join('');
console.log(result);