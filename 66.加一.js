/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 如果为9!可能导致很多为+1,甚至数组元素个数+1,所以不推荐一位位进位的方式实现

// map如果在不同条件下有不同映射,需要每个item都有对应的return,否则undefined
/* var plusOne = function (digits) {
  let flag = false
  digits = digits.map((item, index) => {
    if (index === digits.length - 1 && index !== 9) {
      console.log(item)
      return item + 1
    } else if (index === digits.length - 1 && index === 9) {
      flag = true
      return 0
    } else {
      return item
    }
  })
  digits[digits.length - 2] = flag
    ? digits[digits.length - 2] + 1
    : digits[digits.length - 2]
  return digits
} */

/* var plusOne = function (digits) {
  let length = digits.length
  // 简单情况简单处理
  if (digits[length - 1] !== 9) {
    digits[length - 1] += 1
    return digits
  }
  let sum = BigInt(0)
  for (let i in digits) {
    sum += BigInt(digits[i]) * BigInt(Math.pow(10, digits.length - i - 1))
  }
  sum += BigInt(1)
  let str = String(sum)
  return str.split("")
} */

/*  */
/* var plusOne = function (digits) {
  if (digits.length === 1) {
    return digits[0] === 9 ? [1, 0] : [digits[0] + 1]
  }
  let [num, ...arr] = digits.reverse()
  digits.reverse()
  if (num !== 9) {
    return [...arr.reverse(), num + 1]
  } else {
    return [...plusOne(arr.reverse()), 0]
  }
} */

/* var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      // 只要遇到不是9的都会在这里返回
      digits[i]++
      return digits
    }
  }
  // 这是数组的每一位都是9的情况
  digits.unshift(1)
  return digits
} */

/* 二次尝试 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
}
// @lc code=end
