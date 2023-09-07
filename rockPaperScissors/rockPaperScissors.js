/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

const rps = (rounds) => {
  let result = [];
  let letters = ['R', 'P', 'S'];
  if (rounds === 0) {
    return result;
  }
  let playRounds = (plays) => {
    if (plays.length === rounds) {
      result.push(plays);
      return;
    }
    letters.forEach((letter) => {
      playRounds(plays + letter);
    });
  };
  playRounds('');
  return result;
};

console.log(rps(3));
