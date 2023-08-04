/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 时间复杂度(n+m)log(n+m)
/* var findMedianSortedArrays = function (nums1, nums2) {
  // 数组解构再合并,新数组长度是两个原数组长度之和
  // sort方法,是生成新数组
  let nums = [...nums1, ...nums2]
  // console.log(nums)
  nums = nums.sort((a, b) => a - b)
  // console.log(nums)
  if (nums.length % 2) {
    return nums[parseInt(nums.length / 2)]
  } else {
    return (
      (nums[parseInt(nums.length / 2)] + nums[parseInt(nums.length / 2) - 1]) /
      2
    )
  }
} */

// 时间复杂度logn(n是两个数组中长度更小值)
// #region
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length
  if (n1 > n2) {
    return findMedianSortedArrays(nums2, nums1) // 保证左边的数组个数<=右边的数组个数
  }
  let left = 0
  let right = n1
  while (left <= right) {
    let mid1 = Math.floor((left + right) / 2) // nums1二分位置
    let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1) // nums2二分位置
    let maxLeft1 = mid1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1]
    let minRight1 = mid1 == n1 ? Number.MAX_SAFE_INTEGER : nums1[mid1]
    let maxLeft2 = mid2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1]
    let minRight2 = mid2 == n2 ? Number.MAX_SAFE_INTEGER : nums2[mid2]
    // 保证二分正确
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // 偶数个元素的情况
      if ((n1 + n2) % 2 == 0) {
        return (
          // 左右两边个数相等,左边最大和右边最小取均值,浮点数
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        )
      }
      // 奇数个元素的情况
      else {
        return Math.max(maxLeft1, maxLeft2) // 保证左边个数多一
      }
    }
    // 二分不正确, nums1左最大大于nums2右最小,将nums1分割线左移
    else if (maxLeft1 > minRight2) {
      right = mid1 - 1
    }
    // 二分不正确,nums2左最大大于nums1右最小,将nums1分割线右移
    else {
      left = mid1 + 1
    }
  }
  return -1
}
// #endregion

// @lc code=end
