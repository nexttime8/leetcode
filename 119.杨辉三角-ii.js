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
/* var getRow = function (rowIndex) {
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
} */

/* top voted solution 杨辉三角公式 
nums.length 在这里指的是 当前行总元素个数；i>=j在杨辉三角中总成立
i行j列元素(j不为第一个，不为最后一个元素) a[i][j] = a[i][j-1] * (nums.length-j) / j
*/
var getRow = function (r) {
  var ans = new Array(r + 1)
  ans[0] = ans[r] = 1
  // 每个元素都可以右同行前面一个元素推断出来
  for (i = 1, up = r; i < r; i++, up--) ans[i] = (ans[i - 1] * up) / i
  return ans
}
// @lc code=end
