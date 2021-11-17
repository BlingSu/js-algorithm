/**
 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

 示例：
 输入: [1,2,3]
 输出: [
         [1,2,3],
         [1,3,2],
         [2,1,3],
         [2,3,1],
         [3,1,2],
         [3,2,1]
       ]
 * */

/**
 * @description 穷举 递归 dfs
 * @param {number[]} nums
 * @return {number[]}
 * */

const permute = function (nums) {
  const len = nums.length;

  const cur = [] // 记录当前排列内容
  const res = [] // 所有排列顺序
  const visited = {} // 避免重复使用同一个数字

  function dfs(nth) {
    if (nth === len) { // 边界返回
      res.push(cur.slice()) // 拷贝
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) { // 没有用过

        // 1表示用过
        visited[nums[i]] = 1;
        cur.push(nums[i]);

        // 基于这个排列继续
        dfs(n + 1);
        // nums[i] 让出当前位
        cur.pop();
        // 去掉标记
        visited[nums[i]] = 0;
      }
    }
  }
  dfs(0); // 从0开始，也就是第一个坑位
  return res;
}
