/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function (nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) nums[j++] = nums[i]
  }
  return j
} */

/* 二次尝试 */
/* 不是真正的移除元素，对于nums=[3,2,2,3]和val=3，nums = [2,2,3,3] 或 nums = [2,2,0,0]都是正确答案，甚至前面元素的顺序也无所谓 */
var removeElement = function (nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[j++] = nums[i]
  }
  return j
}
// @lc code=end
