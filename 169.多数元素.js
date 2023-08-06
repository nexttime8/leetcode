/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/* 思路清晰，一遍过 */
var majorityElement = function (nums) {
  let map = new Map()
  nums.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1) // value加一要这样
    }
  })
  let arr = Array.from(map)
  arr.sort((a, b) => {
    return b[1] - a[1]
  })
  return arr[0][0]
}
// @lc code=end
