/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/* 思路清晰，一遍过 */
/* var majorityElement = function (nums) {
  let map = new Map()
  nums.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1) // value加一要这样
    }
  })
  let arr = Array.from(map)
  arr.sort((a, b) => {
    return b[1] - a[1]
  })
  return arr[0][0]
} */

/* 二次尝试成功，但是还要再看一遍 */
/* var majorityElement = function(nums){
  if(nums.length===1) return nums[0]
  nums.sort((a,b)=>a-b)
  let left = 0
  // tips4:数组长度为1要特殊处理
  let right = 1
  let count = 1
  let target = nums.length>>1
  while(right<=nums.length){
    if(nums[left]===nums[right]) {
      count++
      // tips1:是大于
      if(count>target){
        return nums[left]
      }
    }
    else {
      // tips2:是1
      count = 1
    }
    // tips3:总要执行
    left++
    right++
  }
} */

var majorityElement = function(nums) {
  // Initialize sol and cnt to store the solution and its frequency for respective iterations...
  let sol = 0, cnt = 0;
  // For every element i in the array...
  for(let i = 0; i < nums.length; i++ ) {
      // If cnt is equal to zero, update sol as sol = i
      if(cnt == 0){
          sol = nums[i];
          cnt = 1;
      }
      // If i is equal to candidate, increment cnt...
      else if(sol == nums[i]){
          cnt++;
      }
      // Otherwise, decrement cnt...
      else{
          cnt--;
      }
  }
  // Return & print the solution...
  return sol;
}
// @lc code=end
