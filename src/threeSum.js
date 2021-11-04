/**
 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 * */


/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 固定一个值，排序，求差，双指针对撞（对重复元素进行跳过处理）
 * */

const threeSum = function (nums) {
  let res = [];

  // 排序
  nums = nums.sort((a, b) => a - b);

  const len = nums.length;

  for (let i = 0; i < len - 2; i++) { // 遍历到倒数第三个即可，因为最后面两个指针回遍历到

    let j = i + 1; // 左指针
    let k = len - 1; // 右指针

    if (i > 0 && nums[i] === nums[i - 1]) { // 遇到重复的数字跳过
      continue;
    }

    while (j < k) { // 左指针小于右指针
      if (nums[i] + nums[j] + nums[k] < 0) { // 三个数加起来小于0 左指针右移
        j++;
        while (j < k && nums[j] === nums[j - 1]) { // 左指针跟前一个比，重复的时候继续右移
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]); // 相等就存进去

        // 同步前进
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) { // 左指针跟前一个比，重复的时候继续右移动
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) { // 右指针跟前一个比，重复的时候继续左移动
          k--;
        }
      }
    }
  }
  return res;
}
