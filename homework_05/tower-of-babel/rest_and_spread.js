var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

function avg(...args) {
  return args.reduce((accum, curr) => { return accum + curr }, 0) / args.length;
}

console.log(avg(...args));
