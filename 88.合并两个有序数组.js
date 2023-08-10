/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* 要求合并，但不去重 */
/* 效果非常差 */
/* var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i]
    }
    return nums1
  }
  let j = m - 1
  let length = nums1.length - 1
  for (let i = n - 1; i >= 0; i--) {
    if (j !== -1) {
      if (nums2[i] >= nums1[j]) {
        nums1[length--] = nums2[i]
      } else if (nums2[i] < nums1[j]) {
        console.log(i, j)
        nums1[length--] = nums1[j--]
        i++ // *
      }
    } else {
      nums1[length--] = nums2[i]
    }
  }
} */
/* 应该从nums2后面开始判断，先放到nums1里面去，降低空间复杂度 */

/* 直接把nums2的元素插入到nums1后面，再sort排序,符合时间复杂度要求 */
/* var merge = function (nums1, m, nums2, n) {
  for (let j = 0, i = m; j < n; j++) {
    nums1[i] = nums2[j]
    i++
  }
  nums1.sort((a, b) => a - b)
} */

/* var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}; */

/* 二次尝试，成功 */
/* var merge = function (nums1, m, nums2, n) {
  // n2中数据和n1中相等，n2的数据在n1后面
  let j = n - 1
  for (let i = m - 1, k = m + n - 1; i >= 0; ) {
    // 保证合并完nums1中有效数
    if (nums2[j] >= nums1[i]) {
      nums1[k--] = nums2[j--]
      // 获取nums2[j]之前需要考虑数组越界问题
      if (j >= 0 && nums2[j] === nums1[i]) {
        nums1[k--] = nums1[i--]
      }
    } else {
      nums1[k--] = nums1[i--]
    }
  }
  // 剩余部分处理，保证合并完nums2种有效数
  for (let l = j; l >= 0; l--) {
    nums1[l] = nums2[l]
  }
  return nums1
} */

/* 二次尝试 一次过，且时间复杂度符合要求*/
var merge = function (nums1, m, nums2, n) {
  let right1 = m - 1
  let right2 = n - 1
  let target = m + n - 1
  while (target >= 0 && right1 >= 0 && right2 >= 0) {
    if (nums1[right1] > nums2[right2]) {
      nums1[target--] = nums1[right1--]
    } else nums1[target--] = nums2[right2--]
  }
  // nums1没有遍历到0，不需要重复赋值
  if (right1 < 0) {
    for (let i = right2; i >= 0; i--) {
      nums1[target--] = nums2[i]
    }
  }
  return nums1
}
// @lc code=end
