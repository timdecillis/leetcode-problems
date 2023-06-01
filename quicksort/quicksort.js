/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  var sorted = [];
  var lower = [];
  var higher = [];
  var pivot = array[Math.floor(arr.length/2)];
  array.forEach(num => {
      if (num === pivot) {
          return;
      } else if (num > pivot) {
          higher.push(num);
      } else if (num < pivot) {
          lower.push(num);
      }
  })

  var concat = lower.concat(pivot);
  return concat.concat(higher);

};
