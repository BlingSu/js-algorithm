/**
 * 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 过几天才会升温，比如第一天73度，过一天就74度了。所以有temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * */

/**
 * @param {number[]} T 温度数组
 * @return {number[]}
 * */

const dailyTemperatures = function (T) {
  const len = T.length;
  const stack = []; // 栈

  const res = (new Array(len)).fill(0); // 初始化数组，定长，占位0

  for (let i = 0; i < len; i++) {
    // 如果栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack.pop();
      // 当前栈顶温度值和第一个高于他的温度值的索引差
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
