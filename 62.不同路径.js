/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 路径个数
/* 动态规划 30.42 % 62.46 % */
/* var uniquePaths = function (m, n) {
    let dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(1); // 使用 1 初始化内部数组
    }
    // 或者const dp = Array(m).fill().map(item => Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}; */

/* 数论 排列组合 总步数确定 70.85 %  65.46 % */
// 需要在计算分子的时候，不断除以分母
// 问题转换：在总共 (m-1) + (n-1) 步中，选择 (m-1) 步向下的排列方式有多少种？（组合问题）
// C(m+n-2, m-1) 或 C(m+n-2, n-1)
// 在 m 和 n 值增大时可能会导致溢出或者精度问题，因为阶乘值增长非常快。更常用的方法是使用动态规划来解决这个问题。
var uniquePaths = function (m, n) {
    // from start to destination, we need (m-1) ↓ moves and (n-1) → moves
    // Thus, the number of unique paths is the number of permutations of (m-1) ↓ and (n-1) →
    // 
    // Number of unique paths = ( m-1 + n-1 ) ! / (m-1)! * (n-1)!
    let pathCount = factorial(m - 1 + n - 1) / (factorial(m - 1) * factorial(n - 1));
    return pathCount
};
var factorial = function (k) { // 计算阶乘
    if (k == 0 || k == 1) {
        return 1;
    } else {
        return k * factorial(k - 1);
    }
};


/* var makeKey = function (m, n) {
    return String(m) + "," + String(n);
}
var uniquePaths = function (m, n) {
    // key: tuple of (matrix height, matrix width)
    // value: path count of matrix from start to destination
    pathCount = {};
    var dp = function (m, n) {
        let matrixSize = makeKey(m, n);
        if (matrixSize in pathCount) {
            return pathCount[matrixSize];
        }
        if (m == 0 && n == 0) {
            // base case
            pathCount[matrixSize] = 0;
            return 0;
        }
        else if (m == 1 || n == 1) {
            // base case
            pathCount[matrixSize] = 1;
            return 1;

        } else {
            // general case
            pathCount[matrixSize] = dp(m - 1, n) + dp(m, n - 1);
            return pathCount[matrixSize];
        }
    }
    return dp(m, n);
}; */
// @lc code=end

