function getTransformedArray(arr, func) {
  let arrToReturn = [];

  forEach(arr, function (i) {
    arrToReturn.push(func(i));
  });

  return arrToReturn;
}