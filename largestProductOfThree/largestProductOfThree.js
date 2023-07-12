/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  debugger;
  let toMultiply = [];
  while (toMultiply.length < 3) {
    let highest = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > highest) {
        highest = array[i];
      }
    }
    let index = array.indexOf(highest);
    toMultiply.push(array.splice(index, 1)[0]);
  }


  return toMultiply.reduce((prev, current) => {
    return prev * current;
  });


};
