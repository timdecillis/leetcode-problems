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

module.exports = rockPaperScissors = function (rounds) {
  if (rounds === 0) {
    return [];
  }

  var lettersArray = ['R', 'P', 'S'];
  var combos = [];
  var rounds = rounds || 3;

  var playRounds = plays => {
    var plays = plays || '';
    if (plays.length === rounds) {
      combos.push(plays);
      return;
    }
    for (var i = 0; i < lettersArray.length; i++) {
      var currentLetter = lettersArray[i];
      playRounds(plays + lettersArray[i]);
    }
  };
  playRounds();
  return combos;
};

