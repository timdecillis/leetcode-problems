/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var mid = Math.floor(array.length/2);
  if(array[mid] === target) {
      return mid;
  }
      if (array[mid]<=target) {
          binarySearch(array.slice(mid + 1), target);
      } else if (array[mid]>=target) {
          binarySearch(array.slice(0, mid), target)
      }
};