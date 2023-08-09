/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

/* 二分法 */
var isPerfectSquare = function (num) {
  let left = 1
  let right = (num >> 1) + 1
  let mid = 0
  while (left <= right) {
    mid = (left + right) >> 1
    if (num > mid * mid) {
      left = mid + 1
    } else if (num < mid * mid) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
