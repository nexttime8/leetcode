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

var maxProfit = function (prices) {
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
}
// @lc code=end
