let sides = [];

for (let i = 0; i < 3; i++) {
  sides.push(parseFloat(prompt(`Enter ${i + 1} side: `)));
}

//sorting the array to get biggest side at first position;
//therefore we could check if the triangle is correct and has a right interior angle;
sides.sort((a, b) => {
  return b - a;
});

//checking if the triangle is correct;
let isTriangle = sides[1] + sides[2] > sides[0];

//checking if data is correct;
sides.forEach(side => {
  if (side === NaN) {
    isTriangle = false;
  }
});

//getting type and square of the traingle if it is correct;
if (isTriangle) {
  getTypeAndSquare();
} else {
  console.log('Incorrect data');
}

function getTypeAndSquare() {
  let p = (sides[0] + sides[1] + sides[2]) / 2;
  let square = Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2]));

  //if triangle has a right angle (right triangle)
  if (sides[0] === Math.sqrt(sides[1] * sides[1] + sides[2] * sides[2])) {
    myConsoleLog('right triangle', square);
  }

  //if all sides are equal (equilateral)
  else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    myConsoleLog('equilateral', square);
  }

  //if only 2 sides are equal (isosceles)
  else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] == sides[2]) {
    myConsoleLog('isosceles', square)
  }

  //if sides are not equal (scalene)
  else {
    myConsoleLog('scalene', square);
  }
}

function myConsoleLog(type, square) {
  console.log(`Type of triangle is ${type} and square is ${(square % 1 === 0) ? square : myRoundUp(square, 2)}`);
}

function myRoundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}