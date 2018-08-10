let playGame = confirm('Do you want to play a game?');
let attemt = 1;
let totalPrize = 0;

while (playGame) {
  attempt++;
  let maxNumber = 5 * attempt;
  let randomNumber = Math.floor(Math.random() * maxNumber);
  let possiblePrize = 10;
  console.log(randomNumber);

  for (let i = 1; i <= 3; i++) {
    let guessedNumber = prompt(`Enter a number from 0 to ${maxNumber}\n
            Attempts left: ${i}\n
            Total prize: ${totalPrize}\n
            Possible prize on current attempt: ${Math.ceil(possiblePrize / i)}`);
  }

}