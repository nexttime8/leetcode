/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 左闭右闭实现
/* var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let middle = parseInt((left + right) / 2) // 2-0-1
    // 第一次调整:js中输出小数!不会自动向下取整;加上parseInt()强制类型转换
    // console.log(middle)
    if (nums[middle] > target) {
      right = middle - 1 // 1:left=0,right=1
    } else if (nums[middle] < target) {
      left = middle + 1 // 2:left=1,right=1;3:left=2,right=1退出while循环
    } else {
      return middle
    }
  }
  // 第二次调整:考虑target不存在的情况[没认真看题目:如果目标值存在返回下标，否则返回 -1]
  return -1
} */

// 左闭右开实现
var search = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let middle = parseInt((left + right) / 2)
    if (nums[middle] > target) {
      right = middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}
// @lc code=end
