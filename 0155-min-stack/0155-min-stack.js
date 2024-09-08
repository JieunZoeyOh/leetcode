const MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  const minStackLength = this.minStack.length;
  const lastIndex = minStackLength - 1;

  if (minStackLength === 0 || val <= this.minStack[lastIndex]) {
    this.minStack.push(val);
  }

  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const minItem = this.minStack[this.minStack.length - 1];
  const poppedItem = this.stack.pop();

  if (minItem === poppedItem) {
    this.minStack.pop();
  }

  return poppedItem;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
