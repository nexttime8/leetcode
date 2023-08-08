/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

/* 不知道怎么用二分法的思想 */
var mySqrt = function (x) {
  if (x <= 1) return x
  else if (x === 2) return 1
  for (let i = 1; i < x; i++) {
    if (i * i === x) return i
    else if (i * i > x) return i - 1
  }
}
// @lc code=end
