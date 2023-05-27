/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var evensArray = [];
  var resultArray = [];
  var counter = {};
  arr.forEach(item => {
    if (counter[item] === undefined) {
      counter[item] = 1;
    } else {
      counter[item] ++;
    }
  });

  for (var key in counter) {
    if(counter[key] % 2 === 0) {
        evensArray.push(key);
    }
  }

  for (var k = 0; k < evensArray.length; k ++) {
    if (parseInt(evensArray[k])) {
      evensArray[k] = parseInt(evensArray[k])
    }
  }

  for (var i = 0; i < arr.length; i ++) {
    for (var j = 0; j < evensArray.length; j ++) {
      if (arr[i] === evensArray[j]) {
        resultArray.push(arr[i]);
      }
    }
  }
  if (resultArray.length === 0) {
    return null;
  } else {
    return resultArray[0];
  }
};