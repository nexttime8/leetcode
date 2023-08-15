/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/* var generate = function (numRows) {
  let arr = []
  // 将所有的1初始化
  for (let i = 0; i <= numRows - 1; i++) {
    arr.push([])
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1
      }
    }
  }
  for (let i = 2; i <= numRows - 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (j !== 0 && j !== i) {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
      }
    }
  }
  return arr
} */

/* top voted solution */
/* var generate = function (numRows) {
  var i = 0
  var j = 0
  // Create an array list to store the output result...
  var res = []
  // For generating each row of the triangle...
  for (i = 0; i < numRows; i++) {
    res.push(Array(i + 1)) // Initialize the first row of the pascal triangle as {1}...
    for (j = 0; j <= i; j++) {
      // Primary...
      if (j === 0 || j === i) {
        res[i][j] = 1
      } else {
        // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
  }
  return res // Return the output list of pascal values...
} */

/* 二次尝试，仍有错误TypeError: Cannot set properties of undefined (setting '0') */
/* var generate = function (numRows) {
  let arr = Array(numRows)
  for (let i = 0; i < numRows; i++) {
    arr[i] = Array(i + 1)
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
      }
    }
  }
  return arr
} */

/* 尝试，仍然是TypeError: Cannot set properties of undefined (setting '0') */
/* 是map和Array相关的问题 */
/* 54.04 % 96.75 % */
var generate = function (numRows) {
  // let arr = Array(numRows).map(item => Array(numRows).fill(0)) // 这里有问题
  let arr = Array(numRows).fill(undefined).map(item => [])
  for (let i = 0; i < numRows; i++) {
    // j<=i
    for (let j = 0; j <= i; j++) {
      if (!j || j === i) arr[i][j] = 1
      else arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
    }
  }
  return arr
}
// @lc code=end
