/**
 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 输入: "aba"
 输出: True
 示例 2:
 输入: "abca"
 输出: True
 解释: 你可以删除c字符。
 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * */

/**
 * @param {string} s
 * @description 对称性和双指针的方式匹配
 * */


const validPalindrome = function (s) {
  const len = s.length;

  // 设置左右指针
  let i = 0,
      j = len - 1

  while (i < j && s[i] === s[j]) { // 对称，所以往中间移动
    i++;
    j--;
  }

  if (isPalindrome(i + 1, j)) { // 通过跳过左指针后1位是否回文
    return true;
  }
  if (isPalindrome(i, j - 1)) { // 通过跳过右指针1位是否回文
    return true;
  }

  /**
   * @param start 头指针
   * @param end 尾指针
   * @description 判断是否回文的方法，根据对称比较
   * */
  function isPalindrome(start, end) {
    while (start < end) {
      if (s[start] != s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
  return false; // 默认不是
}
