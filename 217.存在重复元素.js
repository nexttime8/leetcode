/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* 我的实现方法和169一模一样 */
/* var containsDuplicate = function (nums) {
  let map = new Map()
  nums.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  let arr = Array.from(map)
  arr.sort((a, b) => {
    return b[1] - a[1]
  })
  return arr[0][1] >= 2 ? true : false
} */

/* Object实现 */
/* var containsDuplicate = function (nums) {
  let obj = {}
  nums.forEach((item) => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  // 对象不是可以获取value数组吗？只能new Object()的情况可以？错！和new与否无关，只是不会自动提示方法和属性；values()是静态方法！Object.values(obj)，用法记错了
  // 判断数组中是否存在大于等于2的元素
  // console.log(Object.values(obj))
  let flag = false
  Object.values(obj).forEach((item) => {
    if (item >= 2) {
      flag = true // 这里是作为forEach的return值？
      return
    }
  })
  return flag
} */

/* 这个实现方法，逻辑非常难理清，没写对 */
/* var containsDuplicate = function (nums) {
  let i = 0
  let j = 1
  let flag = false
  while (j !== nums.length) {
    console.log(nums[i], nums[j])
    if (nums[i] === nums[j]) {
      flag = true
      break
    } else if (j === nums.length - 1) {
      i++
      j = i
    }
    j++
  }
  return flag
} */

/* 用reduce函数 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b)
  let flag = false
  nums.reduce((prev, curr) => {
    prev = curr
    if (prev === curr) flag = true
    console.log(prev, curr)
  })
  return flag
}
// @lc code=end
