function decypherPhrase(obj, str) {
  let swapped = {};

  for (let i in obj) {
    swapped[obj[i]] = i;
  }

  return cypherPhrase(swapped, str);
}