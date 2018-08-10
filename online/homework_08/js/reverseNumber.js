function reverseNumber(number) {

  var str = Math.abs(number).toString();

  str = str.split('').reverse().join('');

  return number < 0 ? -1 * parseInt(str) : parseInt(str);
}