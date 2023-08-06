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
/* var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length
  if (n1 > n2) {
    return findMedianSortedArrays(nums2, nums1) // 保证左边的数组个数<=右边的数组个数
  }
  let left = 0
  let right = n1
  while (left <= right) {
    // 让最后一次循环,left=right的时候,返回值
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
      // maxLeft2 > minRight1
      left = mid1 + 1
    }
  }
  return -1
} */
// #endregion
/* var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length
  if (n1 > n2) {
    // 别忘了return 返回
    return findMedianSortedArrays(nums2, nums1)
  }
  let left = 0
  let right = n1
  while (left <= right) {
    // 先默认mid1为数组一的中位数位置,之后再调整
    let mid1 = Math.floor((left + right) / 2)
    // 记一下要-mid1,因为最终保证mid1+mid2=(n1 + n2 + 1) / 2
    let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1)
    // 1代表num1数组,Left和Right分别代表分割的左右两边
    let maxLeft1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1]
    let minRight1 = mid1 === n1 ? Number.MAX_SAFE_INTEGER : nums1[mid1]
    let maxLeft2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1]
    let minRight2 = mid2 === n2 ? Number.MAX_SAFE_INTEGER : nums2[mid2]
    // 这里要等于
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // 是奇数
      if ((n1 + n2) % 2) {
        return Math.max(maxLeft1, maxLeft2)
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        )
      }
    }
    // 不符合条件,都只和mid1有关
    else if (maxLeft1 > minRight2) {
      right = mid1 - 1
    } else if (maxLeft2 > minRight1) {
      left = mid1 + 1
    }
  }
  return -1
} */

/* var findMedianSortedArrays = function (nums1, nums2) {
//   先获取两个数组的长度
  let length1 = nums1.length
  let length2 = nums2.length
//   再保证第一个数组长度小于第二个数组长度
  if (length1 > length2) {
    return findMedianSortedArrays(nums2, nums1)
  }
//   设定left和right(难点0,忘记设置了)
  let left = 0
  let right = length1
//   这些mid相关的值,都是在while循环里面设置(难点3)
  while (left <= right) {
    // mid1的设定由left和right来调整,因为每次的mid1都要随着left和right更新,而不是固定的(难点4)
    // 保证两个中位mid1+mid2=(length1+length2+1)/2(难点1)
    let mid1 = Math.floor((left + right) / 2)
    let mid2 = Math.floor((length1 + length2 + 1) / 2 - mid1)
    // 再进行分割,两个数组分成左右两部分,排除边界条件(难点2,注意min和max)
    let maxLeft1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1]
    let minRight1 = mid1 === length1 ? Number.MAX_SAFE_INTEGER : nums1[mid1]
    let maxLeft2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1]
    let minRight2 = mid2 === length2 ? Number.MAX_SAFE_INTEGER : nums2[mid2]
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
    //   明明是nums1个数更少,为什么总元素个数为奇数时不是从右边取?因为是mid1和mid2来确定了左边更多(难点5)
      if ((length1 + length2) % 2) {
        return Math.max(maxLeft1, maxLeft2)
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        )
      }
    } else if (maxLeft1 > minRight2) {
      right = mid1 - 1
    } else if (maxLeft2 > minRight1) {
      left = mid1 + 1
    //   难点6,都只由mid1决定,全程只围绕nums1的分割线,因为可以自动确定mid2
    }
  }
  return -1
} */

/* var findMedianSortedArrays = function (nums1, nums2) {
  // 第一步:获取两个数组长度,并保证nums1长度<nums2长度
  let length1 = nums1.length
  let length2 = nums2.length
  if (length1 > length2) {
    return findMedianSortedArrays(nums2, nums1)
  }
  // 第二步:设定left和right值,作为循环条件
  let left = 0
  let right = length1
  // 第三步:开始循环,并根据left和right值,设置两个数组的分割线位置
  while (left <= right) {
    let mid1 = Math.floor((left + right) / 2)
    // 无论总长度是偶数还是奇数,中位数都取Math.floor((length2+length2+1)/2),并且左边个数多于右边
    let mid2 = Math.floor((length1 + length2 + 1) / 2 - mid1)
    // 理解一:mid1左边是left,mid1开始到右边是right,mid2同理;理解二:需要排除特殊情况
    // let maxLeft1 = nums1[mid1 - 1]
    // let minRight1 = nums1[mid1]
    // let maxLeft2 = nums2[mid2 - 1]
    // let minRight2 = nums2[mid2]
    let maxLeft1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1]
    let minRight1 = mid1 === length1 ? Number.MAX_SAFE_INTEGER : nums1[mid1]
    let maxLeft2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1]
    let minRight2 = mid2 === length2 ? Number.MAX_SAFE_INTEGER : nums2[mid2]
    // 第四步:判断是否符合二分条件,符合则返回值,不符合则基于mid1修改left和right值
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((length1 + length2) % 2) {
        return Math.max(maxLeft1, maxLeft2) // 差点出小问题
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        )
      }
    } else if (maxLeft1 > minRight2) {
      right = mid1 - 1
    } else {
      left = mid1 + 1
    }
  }
  // 第五步:没找到,特殊处理
  return -1
} */

/* 二次尝试 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length
  let n2 = nums2.length
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1) // 这里是将数组传入，差点出小问题
  let left = 0
  // 这里是n1赋值给right！
  let right = n1
  while (left <= right) {
    let mid1 = Math.floor((left + right) / 2)
    let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1)

    let maxLeft1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1]
    // 这里mid值是和right比较吗？不清晰。是和n1即nums1的长度比较！
    let minRight1 = mid1 === n1 ? Number.MAX_SAFE_INTEGER : nums1[mid1]
    let maxLeft2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1]
    // 这里是和nums2的长度比较！
    let minRight2 = mid2 === n2 ? Number.MAX_SAFE_INTEGER : nums2[mid2]

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((n1 + n2) % 2) {
        return Math.max(maxLeft1, maxLeft2)
      } else {
        // 这里出小问题，两个数求均值，不需要取整
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        )
      }
    }
    // 这里怎么赋值，逻辑不清晰;left和right维护的是nums1数组的分割位置
    else if (maxLeft1 > minRight2) {
      right = mid1 - 1
    } else if (maxLeft2 > minRight1) {
      left = mid1 + 1
    }
  }
  // 不要忘记边界处理
  return -1
}
// @lc code=end
