/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 规律一：每行的第二个元素（倒数第二个元素），就是行数
  // 规律二：偶数行奇数个元素，奇数行偶数个元素，只需要考虑前 Math.floor((rowIndex+2)/2)个元素
  // 要求： O(rowIndex) 空间复杂度【不是时间复杂度！】
  let arr = Array(rowIndex + 1)
  arr[0] = arr[rowIndex] = 1
  if (rowIndex === 0 || rowIndex === 1) return arr
  arr[1] = rowIndex
  if (rowIndex === 2) return arr
  for (let i = 2; i <= rowIndex; i++) {
    arr[i] = rowIndex * i
  }
}
// @lc code=end
