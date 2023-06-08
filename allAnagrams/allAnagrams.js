/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var telephoneWords = function(string) {
  var anagrams = [];
  var makeAnagram = function (anagram, letters) {
    if (letters.length === 0) {
      return anagrams.push(anagram);
    }
    for (var i = 0; i < string.length; i ++) {
      makeAnagram(anagram + string[i], letters.slice(1));
    }
  };
  makeAnagram('', string);
  return anagrams;
}
