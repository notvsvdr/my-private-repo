function getClosestToZero() {

  let result = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (Math.abs(result) > Math.abs(arguments[i])) {
      result = arguments[i];
    }
  }

  return result;
}