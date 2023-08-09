/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/* 题目看起来就很复杂，果然做出来了，但是题目却看错了！！！！！要满足的是“和 ≥ target”，我的做法是"和=target“ */
/* var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let arr = []
  let i = 0
  let j = 1
  let sum = nums[i]
  // 这里的循环条件到底是什么
  while (j <= n) {
    if (sum === target) {
      // 符合target的元素个数如何表示
      arr.push(j - i)
      sum -= nums[i++]
    } else if (sum > target) {
      sum -= nums[i++]
    } else {
      if (j === n && i === n - 1) {
        break
        // 不能return，这里如果return，直接就是整个函数return，就会变成undefined
      }
      sum += nums[j++]
    }
  }
  if (arr.length === 0) {
    return 0
  }
  return Math.min(...arr)
} */

/* 看清题目重做，写错了一百次，将数组存储改为变量存储，每次进行大小比较 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let i = 0
  let j = 1
  // 优化：不用数组
  // let arr = []
  let res = Infinity
  let sum = nums[i]
  while (i < n && j <= n) {
    if (sum < target) {
      sum += nums[j++]
    } else {
      res = res < j - i ? res : j - i
      sum -= nums[i++]
    }
  }
  // 判断是否为undefined
  return res === Infinity ? 0 : res
}

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/* var minSubArrayLen = function (target, nums) {
  let res //返回值
  let i = 0,
    j = 0 //双指针
  let sum = 0
  for (; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      res = res < j - i + 1 ? res : j - i + 1
      sum -= nums[i++]
    }
  }
  return res ? res : 0
} */
// @lc code=end
