/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var counter = {};
  for (var i = 0; i < string.length; i ++) {
    var letter = string[i];
    if (counter[letter] === undefined) {
      counter[letter] = 1;
    } else {
      counter[letter] ++;
    }
  }
  var nonRepeats = [];
  var results = [];
  for (var key in counter) {
    if (counter[key] === 1) {
      nonRepeats.push(key);
    }
  }
  for (var j = 0; j < string.length; j ++) {
    for (var k = 0; k < nonRepeats.length; k ++) {
      if (string[j] === nonRepeats[k]) {
        results.push(string[j]);
      }
    }
  }
  return results[0];
};