/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/* 题目看起来就很复杂，果然做出来了，但是题目却看错了！！！！！要满足的是“和 ≥ target”，我的做法是"和=target“ */
/* var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let arr = []
  let i = 0
  let j = 1
  let sum = nums[i]
  // 这里的循环条件到底是什么
  while (j <= n) {
    if (sum === target) {
      // 符合target的元素个数如何表示
      arr.push(j - i)
      sum -= nums[i++]
    } else if (sum > target) {
      sum -= nums[i++]
    } else {
      if (j === n && i === n - 1) {
        break
        // 不能return，这里如果return，直接就是整个函数return，就会变成undefined
      }
      sum += nums[j++]
    }
  }
  if (arr.length === 0) {
    return 0
  }
  return Math.min(...arr)
} */

/* 看清题目重做，写错了一百次，将数组存储改为变量存储，每次进行大小比较 */
/* var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let i = 0
  let j = 1
  // 优化：不用数组
  // let arr = []
  let res = Infinity
  let sum = nums[i]
  while (i < n && j <= n) {
    if (sum < target) {
      sum += nums[j++]
    } else {
      res = res < j - i ? res : j - i
      sum -= nums[i++]
    }
  }
  // 判断是否为undefined
  return res === Infinity ? 0 : res
} */

/* var minSubArrayLen = function (target, nums) {
  let res //返回值
  let i = 0,
    j = 0 //双指针
  let sum = 0
  for (; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      res = res < j - i + 1 ? res : j - i + 1
      sum -= nums[i++]
    }
  }
  return res ? res : 0
} */

/* 再次忽略了>target这一情况(这个答案是=target的答案) */

/* >=target的情况,用动态规划,时空效率很低 16.35 % 5.01 %  */
/* var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let dp = Array(n).fill(undefined).map(item => Array(2).fill(0))
  dp[0][0] = nums[0] // 前面元素总和（小于target）
  dp[0][1] = 0 // 第一个元素的索引
  if (dp[0][0] > target) return 1
  let len = Infinity
  for (let i = 1; i < n; i++) {
    dp[i][0] = nums[i] + dp[i - 1][0]
    dp[i][1] = dp[i - 1][1]
    // console.log(dp[i][0], dp[i][1])
    while (dp[i][0] >= target) {
      len = len > i - dp[i][1] + 1 ? i - dp[i][1] + 1 : len
      dp[i][0] -= nums[dp[i][1]] // *
      dp[i][1] = dp[i][1] + 1
      // console.log(dp[i][0], dp[i][1], len)
    }
    // console.log('**************')
  }
  return len === Infinity ? 0 : len
} */

/* 用双指针实现 但是代码逻辑有点冗余,时空效率同样很低? 12.56 % 5.01 % */
/* var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let left = 0, right = 1
  let sum = nums[left]
  if (sum >= target) return 1
  let len = Infinity
  for (; right < n; right++) {
    if (nums[right] >= target) return 1
    sum += nums[right]
    console.log(sum)
    while (sum >= target) {
      len = len > right - left + 1 ? right - left + 1 : len
      console.log(sum, len)
      sum -= nums[left++]
    }
    console.log('*************')
  }
  return len === Infinity ? 0 : len
} */

/* 滑动窗口(其实是上面逻辑的一点点简化而已) 83.46 % 87.7 % 时间复杂度是O(n),并不是最优 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let len = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left++];
    }
  }

  return len === Infinity ? 0 : len;
};

// @lc code=end
