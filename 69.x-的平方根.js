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
/* var mySqrt = function (x) {
  if (x <= 1) return x
  else if (x === 2) return 1
  for (let i = 1; i < x; i++) {
    if (i * i === x) return i
    else if (i * i > x) return i - 1
  }
} */

/* top voted solution二分法 */
/* var mySqrt = function (x) {
  let left = 1
  // 只有这里体现了二分？
  let right = Math.floor(x / 2) + 1
  let mid = 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
} */

/* 尝试照搬二分法思想 */
// 多次出错，因为没弄清楚除以二是右移一位，而不是右移两位
var mySqrt = function (x) {
  // 这里不是数组索引，直接是非负整数
  let left = 1
  // 这里别写错了！
  let right = (x >> 1) + 1
  let mid = 1
  while (left <= right) {
    mid = (left + right) >> 1
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    }
    // 这里要不要写相等的逻辑？（要！）
    else {
      return mid
    }
  }
  // 这里有点不知道要返回什么，不是mid（right！）
  return right
}
// @lc code=end
