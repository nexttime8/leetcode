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
  // 首先做不出的时候，应该首先解决问题，其次再优化
  let arr = []
  for (let i = 0; i <= rowIndex; i++) {
    arr.push(Array(i + 1))
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
      }
    }
  }
  return arr[rowIndex]
}
// @lc code=end
