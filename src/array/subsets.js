/**
  题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  说明：解集不能包含重复的子集。
  示例: 输入: nums = [1,2,3]
  输出:
    [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
    []
    ]

/**
 * @param {number[]} nums
 * @param {number[][]}
 * @description dfs + 递归
 * */
 
 const subsets = function (nums) {
  const res = []; // 结果数组
  const len = nums.length; 
  const subsets = []; // 组合数组

  dfs(0);

  function dfs(index) {
    res.push(subsets.slice())
    for (let i = index; i < len; i++) {
      // 当数字存在组合中的情况
      subsets.push(nums[i]);
      // 基于当前数字在组合中的情况，进一步dfs
      dfs(i + 1);
      // 当数字不存在与组合中的情况
      subsets.pop();
    }
  }
  return res;
 }