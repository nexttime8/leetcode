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
/* var mySqrt = function (x) {
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
} */

/* 再次尝试 直接for循环遍历1-(x/2) 16.53 % 5.76 %  效率极低！ */
/* var mySqrt = function (x) {
  if (x === 0) return 0
  for (let i = 1; i < x / 2 + 1; i++) {
    if (i ** 2 <= x && (i + 1) ** 2 > x) return i
  }
} */

/* 再次尝试二分法思想 二分法，但是返回值不同 91.84 % 26.72 % */
// 循环里面,left始终指向我们还没检查过的第一个值，而right指向我们检查过的最后一个值
var mySqrt = function (x) {
  let left = 1
  let right = x / 2 + 1
  while (left <= right) {
    let mid = (left + right) >> 1
    if (mid ** 2 < x) left = mid + 1
    else if (mid ** 2 > x) right = mid - 1
    else return mid // 整除
  }
  return right
  // 为什么是right？
}

// @lc code=end
