/**
 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 给定 nums = [2, 7, 11, 15], target = 9
 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 * */

const twoSum = function (nums, target) {
  const map = {};

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    // 判断差值是否存在
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
}


/**
 * 总-当前=判断map里有没有这个差值
 * 如果没有就set，key是当前值，value是索引
 * 反之直接get
 * */
const twoSum = function (nums, target) {
  let map = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
