/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.length = 0;
  this.nextHighest = null;
  this.lowest = null;

  this.push = function(value) {
    if (this.length === 0) {
      this.lowest = value;
    }
    if (value < this.lowest) {
      this.nextHighest = this.lowest;
      this.lowest = value;
    }
    this[this.length] = value;
    this.length ++;
  };
  this.pop = function() {
    this.length --;
    var temp = this[this.length];
    if (temp === this.lowest) {
      this.lowest = this.nextHighest;
    }
    delete this[this.length];
    return temp;
  };
  this.size = function() {
   if (this.length <= 0) {
     return 0;
   }
    return this.length;
  };
  this.min = function() {
    return this.lowest;
  };
};

