// Given an array of integers nums, you start with an initial positive value startValue.
//
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
//
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.
//
//
//
// Example 1:
//
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
//   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Algos
// 1) Use prefix sum to find lowest sum in array
// 2) If lowest is less than 0, we return the exact opposite of this number + 1, otherwise of lowest sum is 0 or 1 or
// any other positive number, we just return 1, because array has only positive sums

// Key point: Use prefix sum to find minimum sum in array

import 'dart:math';

class Solution {
  int minStartValue(List<int> nums) {
    final prefixSum = [nums[0]];
    int startValue = nums[0];
    for (int i = 1; i < nums.length; i++) {
      prefixSum.add(nums[i] + prefixSum[prefixSum.length - 1]);
      startValue = min(startValue, prefixSum[prefixSum.length-1]);
    }
    if (startValue < 1) {
      return startValue.abs() + 1;
    } else {
      return 1;
    }
  }
}