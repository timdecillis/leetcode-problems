const add = require('./exampleModule').add;
const multiply = require('./exampleModule').multiply;
const commonCharacters = require('./commonCharacters/commonCharacters.js');
const rockPaperScissors = require('./rockPaperScissors/rockPaperScissors.js');
/*
A "describe" block can be used to group together multiple tests
which check the same nodule or function.
 */
describe('Example tests', function() {
  it('Should add small numbers', function() {
    /* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
    expect(add(1, 1)).toBe(2);
    // expect(add(1,0)).toBe(0);
  });

  // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
  it('Should return Infinity for numbers of type Number which are very large', function() {
    expect(add(1.6E310, 1)).toBe(Infinity);
  });

  it('Should multiply small numbers', function() {
    expect(multiply(1, 1)).toBe(1);
  });

  it('Should multiply large numbers', function() {
    expect(multiply(111, 342)).toBe(37962);
  });

});
/*
You start here. 1 describe block per toy problem.
Notice the method "only" above. Because it is there, the describe block below won't run.
You'll need to remove the "only" from the block above. You can use that method to only run tests
on the toy problem you're currently working on. https://jestjs.io/docs/en/api#describeonlyname-fn
*/
describe.only('rockPaperScissors', function() {
  it('should return every possible 3-character combination of \'R\', \'P\', and \'S\'', function() {
    expect(rockPaperScissors(3)).toStrictEqual(['RRR', 'RRP', 'RRS', 'RPR', 'RPP', 'RPS', 'RSR', 'RSP', 'RSS', 'PRR', 'PRP', 'PRS', 'PPR', 'PPP', 'PPS', 'PSR', 'PSP', 'PSS', 'SRR', 'SRP', 'SRS', 'SPR', 'SPP', 'SPS', 'SSR', 'SSP', 'SSS']);
  });
  it('should return every possible 2-character combination of \'R\', \'P\', and \'S\'', function() {
    expect(rockPaperScissors(2)).toStrictEqual(['RR', 'RP', 'RS', 'PR', 'PP', 'PS', 'SR', 'SP', 'SS']);
  });
});
