function cypherPhrase(obj, str) {
  let strArr = str.split('');

  return getTransformedArray(strArr, function (i) {
    return obj[i] || i;
  }).join('');;
}