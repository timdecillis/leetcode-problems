
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  if (typeof (s) !== 'string') {
    return null;
  }
  var converter = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  };
  s = s.toLowerCase();
  var stringArray = s.split('');
  var convertedArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    var current = stringArray[i];
    var next = stringArray[i + 1];
    var last = stringArray[i - 1];
    if (converter[current] < converter[next]) {
      continue;
    } else if (converter[current] > converter[last]) {
      convertedArray.push(converter[current] - converter[last]);
    } else {
      convertedArray.push(converter[stringArray[i]]);
    }
  }
  var sum = 0;
  convertedArray.forEach((num) => {
    sum += num;
  });
  return sum;
};