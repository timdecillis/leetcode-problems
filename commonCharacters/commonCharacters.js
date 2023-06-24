/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var array1 = string1.split('');
  var array2 = string2.split('');
  var resultArray = [];
  for (var i = 0; i < array1.length; i ++) {
    if (array2.indexOf(array1[i]) !== -1) {
      resultArray.push(array1[i]);
    }
  }
  var resultSet = new Set(resultArray);
  return Array.from(resultSet).join('')
};
