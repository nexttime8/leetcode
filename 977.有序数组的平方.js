/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 直接两个函数，sort+map，注意map是生成新函数，sort是在原数组身上进行排序 */
/* var sortedSquares = function (nums) {
  nums = nums.map((item) => item * item)
  nums.sort((a, b) => a - b)
  return nums
} */

/* top voted solution继续用双指针的思想 */
/* var sortedSquares = function (nums) {
  let result = []
  let l = 0
  let r = nums.length - 1
  let p = r

  // 利用了nums数组有序的特点，只需要比较两端的平方值，即可得出当前的最大平方值
  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      result[p--] = nums[l++] ** 2
    } else {
      result[p--] = nums[r--] ** 2
    }
  }

  return result
} */

/* 看了top voted solution，用双指针的思想 */
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let cur = right
  let result = []
  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[cur--] = nums[left++] ** 2
    } else {
      result[cur--] = nums[right--] ** 2
    }
    // result[cur--] =
    //   nums[left] ** 2 > nums[right] ** 2
    //     ? nums[left++] ** 2
    //     : nums[right--] ** 2
  }
  return result
}
// @lc code=end
