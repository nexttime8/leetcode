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
/* var twoSum = function (nums, target) {
  for (let i in nums) {
    for (let j in nums) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
} */

// ES6中的Map实现 O(n)
/* 元素值作为键,元素下标作为值 */
/* var twoSum = function (nums, target) {
  let map = new Map()
  for (let i in nums) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      // 重复但是重复之和不为target,就会覆盖
      map.set(nums[i], i)
    }
  }
  return [] // 考虑边界条件,找不到
} */

// Object实现 O(n)
var twoSum = function (nums, target) {
  const hash = {}
  for (let i in nums) {
    const n = nums[i]
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i]
    }
    hash[n] = i
  }
  return []
}
// @lc code=end
