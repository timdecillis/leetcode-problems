/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


var longestPalindrome = function (string) {
  string = string.toLowerCase();
  var longest = '';
  // iterate through the string
  var count = 0;
  while (count < string.length) {
    if (string[count] === string[count + 2]) {
      let current = string.slice(count, count + 3);
      if (current.length > longest.length) {
        longest = current;
      }
    }
    count ++;
  }
  return longest;
};

