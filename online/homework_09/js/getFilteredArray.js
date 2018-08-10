function getFilteredArray(arr, func) {
  let arrToReturn = [];

  forEach(arr, function (i) {
    if (func(i)) {
      arrToReturn.push(i);
    }
  });

  return arrToReturn;
}