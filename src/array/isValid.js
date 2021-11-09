/**
 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 输入: "()"
 输出: true

 输入: "()[]{}"
 输出: true

 输入: "(]"
 输出: false

 输入: "([)]"
 输出: false

 输入: "{[]}"
 输出: true
 * */

/**
 * @param {string} s
 * @return {boolean}
 * */

// 用一个map来维护左括号和有括号之间的对应关系

let map = {
  "{": "}",
  "[": "]",
  "(": ")"
}

const isValid = function (s) {
  if (!s) {
    return true;
  }

  const stack = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      // 如果不是左括号，必须和栈顶的左括号相匹配右括号
      stack.push(map(ch));
    } else {
      // 栈不为空，且栈顶的左括号没有和当前字符串匹配，就是无效的
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 全部匹配了，应该是空
  return !stack.length;
}
