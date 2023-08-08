/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 用JS太简单，但是时间复杂度不符合要求！！！！！相当于没做 */
/* var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)]
} */

/* top voted solution */
/* var searchRange = function (N, T) {
  // 这样定义函数！
  const find = (target, arr, left = 0, right = arr.length) => {
    // 这个写法好奇怪，但是最终left确实是target的索引值
    while (left <= right) {
      // 理解这种写法 相当于let mid = Math.floor((left+right)/2)
      let mid = (left + right) >> 1
      if (arr[mid] < target) left = mid + 1
      // 大于或等于的情况下，都让right-1，因为实际要用的是left
      else right = mid - 1
    }
    return left
  }
  // 这里找出第一个target
  let Tleft = find(T, N)
  if (N[Tleft] !== T) return [-1, -1]
  // 为什么要T+1？因为最终只要得到索引而已
  return [Tleft, find(T + 1, N, Tleft) - 1]
} */

/* 看完题解，自己尝试 */
var searchRange = function (nums, target) {
  const find = (N, T, left = 0, right = nums.length - 1) => {
    // let mid = 0
    while (left <= right) {
      mid = (left + right) >> 1
      if (N[mid] < T) left = mid + 1
      // else if (N[mid] > T) right = mid - 1
      // else return mid
      // 如果相等的时候直接返回，如[5,7,7,8,8,10]可能会导致得到的是第二个8
      else right = mid - 1
    }
    // 如果没找到，返回的是左边的
    return left
  }
  let num = find(nums, target)
  // 要考虑边界情况，所以mid要在外面初始化
  if (nums[num] !== target) return [-1, -1]
  return [num, find(nums, target + 1, num + 1) - 1]
}
// @lc code=end
