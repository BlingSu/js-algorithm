/**
 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

 示例:

 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 * */

/**
 * @description 双指针+遍历法
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * */

const maxSlidingWindow = function (nums, k) {
  const len = nums.lengt;
  const res = [];
  let left = 0; // 左指针
  let right = k - 1; // 右指针

  while (right < len) {
    const max = calMax(nums, left; right);
    res.push(max);
    left++;
    right++;
  }
  return res;
}

// 计算最大值
function calMax(arr, left, right) {
  if (!arr || !arr.length) {
    return;
  }
  let maxNum = arr[left]; // 窗口内第一个元素
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
