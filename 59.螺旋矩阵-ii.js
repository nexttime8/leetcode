/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
/* 第一次尝试 runrime error */
/* var generateMatrix = function (n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i][n - 1] = n + i
    arr[0][i] = i + 1
    arr[n - 1][i] = n ** 2 - n - (i + 2)
    if (i !== 0 && i !== n - 1) {
    }
  }
  if (n % 2) {
    arr[(Math.floor(n >> 1), Math.floor(n >> 1))] = n ** 2
  } else {
    arr[(Math.floor(n >> 1), Math.floor(n >> 1)) - 1] = n ** 2
  }
  return arr
} */
// @lc code=end
