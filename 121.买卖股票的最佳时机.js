/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

/* 无序数组 */
/* var maxProfit = function (prices) {
  let arr = []
  let [num, ...res] = prices
  while (res.length) {
    console.log(res.length, Math.max(...res) - num)
    arr.push(Math.max(...res) - num)
    prices.shift(0)
    ;[num, ...res] = prices
  }
  return Math.max(...arr) < 0 ? 0 : Math.max(...arr)
} */

/* 对象 */
/* var maxProfit = function (prices) {
  let obj = {}
  prices.sort((a, b) => {
    obj[a] = prices.indexOf(a)
    return a - b
  })

} */

/* 直接找最大值 */
/* [3,3,5,0,0,3,1,4]这个例子推翻了我的方法 */
/* var maxProfit = function (prices) {
  let max = Math.max(...prices)
  // 要用lastIndexOf，因为[2,1,2,1,0,1,2]
  while (prices.lastIndexOf(max) === 0) {
    prices.shift()
    console.log(prices)
    max = Math.max(...prices)
  }
  // splice无法删除某个下标位置后面的所有元素
  prices = prices.slice(0, prices.lastIndexOf(max))
  // 不应该直接把后面的删除，应该作为更小问题，继续进行判断
  return max - Math.min(...prices) > 0 ? max - Math.min(...prices) : 0
} */

/* var maxProfit = function (prices) {
  let arr = []
  prices.forEach((item, index) => {
    arr.push([item, index])
  })
  console.log(arr)
  // sort方法妙用
  arr.sort((a, b) => {
    return a[0] - b[0]
  })
  console.log(arr)
  let i = 0
  let j = arr.length - 1
  let max = 0
  while (i < arr.length) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      max = arr[j][1] - arr[i][1]
    } else {
      i++
    }
  }
  i = 0
  j = arr.length - 1
  while (j >= 0) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      max = arr[j][1] - arr[i][1] > max ? arr[j][1] - arr[i][1] : max
    } else {
      j--
    }
  }
  return max
} */

/* 数组解构 */
/* var maxProfit = function (prices) {
  let [num, ...arr] = prices
  let max = 0
  if (arr.length) {
    if (num >= Math.max(...arr)) {
      return maxProfit(arr)
    } else {
      max = Math.max(...arr)
      return maxProfit(arr) > max - num ? maxProfit(arr) : max - num
    }
  } else return max
} */

/* 双指针解法 */
/* var maxProfit = function (prices) {
  let left = 0 // Buy
  let right = 1 // sell
  let max_profit = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left] // our current profit
      max_profit = Math.max(max_profit, profit)
    } else {
      left = right
    }
    right++
  }
  return max_profit
} */

/* 知道用双指针之后，尝试 */
/* var maxProfit = function (prices) {
  let left = 0
  let right = 1
  let current = 0
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left++
    } else {
      current =
        current > prices[right] - prices[left]
          ? current
          : prices[right] - prices[left]
      right++
    }
  }
  return current
} */

/* 二次尝试，超时，循环无法退出 */
/* var maxProfit = function (prices) {
  let profit = 0
  let left = 0
  let right = 1
  while (right < prices.length) {
    console.log(prices[left], prices[right])
    if (prices[right] > prices[left]) {
      profit =
        profit > prices[right] - prices[left]
          ? profit
          : prices[right] - prices[left]
      right++
    } else if (prices[right] <= prices[left]) {
      left++
      right++
    }
    if (right === prices.length) {
      if (left <= prices.length - 2) {
        left++
      }
      right = left + 1
    }
  }
  return profit
} */


/* 动态规划算法 */
/* const maxProfit = prices => {
  const len = prices.length;
  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ];
  }
  return dp[len - 1][1];
}; */

/* 二次尝试，贪心算法 */
/* var maxProfit = function (prices) {
  let len = prices.length
  let lowerPrice = prices[0]
  let profit = 0
  for (let i = 0; i < len; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i])
    profit = Math.max(profit, prices[i] - lowerPrice)
  }
  return profit
} */

/* 二次尝试，动态规划算法 */
/* var maxProfit = function (prices) {
  let len = prices.length
  let dp = Array(len).fill([0, 0])
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    ]
  }
  return dp[len - 1][1]
} */

/* 再次尝试，动态规划，脑子里面要有公式 94.39 % 24.67 % */
// Line 206: TypeError: Cannot set properties of undefined (setting '0')
var maxProfit = function (prices) {
  let len = prices.length
  // dp声明的行列弄反了
  // let dp = Array(2).fill(undefined).map(item => Array(len).fill(0))
  let dp = Array(len).fill(Array(2).fill(0))
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  for (let j = 1; j < len; j++) { // nums
    dp[j][0] = Math.max(dp[j - 1][0], -prices[j])
    dp[j][1] = Math.max(dp[j][0] + prices[j], dp[j - 1][1])
  }
  return dp[len - 1][1]
}

// @lc code=end
