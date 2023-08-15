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
/* var isPerfectSquare = function (num) {
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
} */

/* 二次尝试 二分法  84.81 %  18.78 %  */
var isPerfectSquare = function (num) {
  // 边界条件考虑
  if (num === 1) return 1
  let left = 1
  let right = num - 1
  while (left <= right) {
    let mid = (left + right) >> 1
    if (mid ** 2 < num) left = mid + 1
    else if (mid ** 2 > num) right = mid - 1
    else return true
  }
  return false
}
// @lc code=end
