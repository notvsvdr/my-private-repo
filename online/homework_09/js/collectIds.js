function collectIds(movies) {
  let arrToReturn = [];

  arrToReturn = getTransformedArray(
    getFilteredArray(movies, function (i) {
      return i.rating > 3;
    }), function (j) {
      return j.id;
    });

  return arrToReturn;
}