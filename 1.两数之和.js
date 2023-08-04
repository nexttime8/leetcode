/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力-两层循环-n^2时间复杂度
// var twoSum = function (nums, target) {
//   for (let i in nums) {
//     for (let j in nums) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j]
//       }
//     }
//   }
// }
// Using ES6 data structure Map
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}
// @lc code=end
