/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/* 到底哪里出了问题?
slice返回新数组
splice返回被删除的元素,在原数组上修改[不熟练]
for...in方法,在遍历的时候不能获取其他下标的元素?
reduce也不知道怎么用
Array.from(new Set(nums))也不是原地修改
filter是原地修改
*/
/* 第一种方法for+splice */
/* var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i + 1]) // for...in和for...of只能获取到当前下标的元素
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
      i-- // 连续重复的情况,把i+1下标的元素删掉,要将i继续与原来的i+2比较
    }
  }
  return nums.length
} */

/* 第二种方法for+原地赋值 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) nums[++i] = nums[j]
  }
  return ++i
}
// @lc code=end
