/**
 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 输入:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6], n = 3
 输出: [1,2,2,3,5,6]
 * */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @retun {void} Don't return anything, modify nums1 in-place instead
 * @description 双指针，全部定义在数组尾部，每次只对指针所指的元素进行比较
 * */

const merge = function (nums1, m, nums2, n) {
  let i = m - 1, // nums1的最后一个索引（指针指向）
      j = n - 1, // nums2的最后一个索引（指针指向）
      k = m + n - 1 // nums1的尾部索引（也就是总的容器的索引）

  while (i >= 0 && j >= 0) { // 当两个数组都没有遍历结束的时候，指针是同步移动的
    if (nums1[i] >= nums2[j]) {
      /**
       * nums1的指针大于nums2的指针，说明nums2的最大值都比nums1小
       * 所以直接把nums1的当前指针移入总容器的最后一个位置
       * 然后nums1的索引-1
       * 总的索引-1（因为已经放进去了nums1的最后一个）
       * */
      nums1[k] = nums2[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  /**
   * 有两种特殊情况
   * 1. 提前遍历完nums1，那么剩下的就是nums2，直接补进去就行了
   * 2. 提前遍历完nums2，啥都不用管，容器本身就是nums1
   * */
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
