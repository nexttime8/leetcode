/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* 时间夫再度为O(n) */
/* var searchInsert = function (nums, target) {
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    if (!flag && nums[i] < target) {
      flag = true
    } else if (flag && nums[i] === target) {
      return i
    } else if (flag && nums[i] > target) {
      if (nums[i - 1] === target) {
        return i - 1
      } else if (nums[i - 1] < target) {
        return i
      }
    }
  }
  return flag ? nums.length : 0
} */

/* 二分法实现 */
var searchInsert = function (nums, target) {
  if (nums[0] > target) return 0
  else if (nums[nums.length - 1] < target) return nums.length
  else {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)
      if (target > nums[middle]) {
        left = middle + 1
      } else if (target < nums[middle]) {
        right = middle - 1
      } else {
        return middle
      }
    }
    return left
  }
}
// @lc code=end
