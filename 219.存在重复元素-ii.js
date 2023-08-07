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
var containsNearbyDuplicate = function (nums, k) {
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
}
// @lc code=end
