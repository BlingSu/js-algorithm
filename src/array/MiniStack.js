/**
 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

 pop() —— 删除栈顶的元素。
 top() —— 获取栈顶元素。
 getMin() —— 检索栈中的最小元素。

 示例:

 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin(); --> 返回 -3.
 minStack.pop();
 minStack.top(); --> 返回 0.
 minStack.getMin(); --> 返回 -2.
 * */


// 初始化栈

const MiniStack = function () {
  this.stack = [];
}

/**
 * @param {number} x
 * @return {void}
 * @description 入栈其实就是push
 * */

MiniStack.prototype.push = function (x) {
  this.stack.push(x);
}

/**
 * @return {void}
 * @description 出栈其实就是pop
 * */

MiniStack.prototype.pop = function () {
  this.stack.pop();
}

/**
 * @return {number}
 * @description 取栈顶，需要边界条件
 * */

MiniStack.prototype.top = function () {
  if (!this.stack || !this.stack.length) {
    return;
  }
  return this.stack[this.stack.length - 1];
}

/**
 * @return {number}
 * @description 取最小值
 * */

MiniStack.prototype.getMin = function () {
  let min = Infinity;
  const { stack } = this;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] < min) {
      min = stack[i];
    }
  }
  return min;
}


/**
 * @description 空间换时间 O(1)
 * */

const MiniStack = function () {
  this.stack = [];
  // 辅助栈
  this.stack2 = [];
}

MiniStack.prototype.push = function (x) {
  this.stack.push(x);
  // 入栈小雨最小值，放到辅助栈里
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
}

MinStack.prototype.pop = function() {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if(this.stack.pop() == this.stack2[this.stack2.length - 1]){
    this.stack2.pop();
  }
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1];
};
