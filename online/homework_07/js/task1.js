var height = parseFloat(prompt('Enter number: '));
var result = '';

if (!(height % 1 === 0) || height <= 0 || height > 20) {
  console.error('Incorrect!');

} else {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= height - i; j++) {
      row += '   ';
    }

    for (var k = 1; k <= i * 2 - 1; k++) {
      row += '[~]';
    }

    result += row + '\n';
  }
  console.log(result);
}