function *factorial(n) {
    let i = 1, j = 1;
    while(n >= i) {
      yield j = i++ * j;
    }
}

for (var n of factorial(5)) {
  console.log(n)
}