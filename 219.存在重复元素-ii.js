/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// k限制两个元素的距离
/* var containsNearbyDuplicate = function (nums, k) {
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] === nums.right) {
      if (Math.abs(left, right) <= k) {
        return true
      } else {
        // 值相等，但是距离太远！怎么处理？
        left++
        right++
      }
    } else {
    }
  }
} */

/* 暴力解 48/56 cases passed (N/A)超时 */
/* var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) return true
    }
  }
  return false
} */

/* 暴力解 改良版 5.13 % 96.05 % */
/* O(k * len) 在k很大的时候，效率很低；k很小的时候，接近于O(len) */
/* var containsNearbyDuplicate = function (nums, k) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j - i <= k; j++) { // 直接在这里限定两个元素的距离
      if (nums[i] === nums[j]) return true
    }
  }
  return false
} */

/* top voted solution 68.03 % 27.89 % */
/* 更高效的解决方案通常是使用哈希表来跟踪每个元素最近一次出现的位置，这样就可以在O(len)时间复杂度内解决问题。 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map(); // key为元素值，value为索引值
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}

// @lc code=end
