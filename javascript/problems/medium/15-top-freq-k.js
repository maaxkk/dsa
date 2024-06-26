// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Algos
// 1) Use hashmap to track number of occurrences for each number in array
// 2) Push to output subarrays which contains pair key:value of each number
// 3) Sort this subarrays by their value(occurrences)
// 4) replace in output array each subarray with just value of this subarray
// 5) return values of output array in range [0:k]

// Key point:
// 1) Use hashmap to track occurrences of each number
// 2) Push each key:value of hashmap to output array and sort it
// 3) return only values of subarrays in output array in range [0:k]

const topKFrequent = function(nums, k) {
    let prevMap = {}
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in prevMap) {
            prevMap[nums[i]]++
        } else prevMap[nums[i]] = 1;
    }
    for (const key in prevMap) {
        output.push([prevMap[key], key])
    }
    output.sort((a, b) => b[0] - a[0])
    console.log(output)
    for (let i = 0; i < k; i++) {
        output[i] = output[i][1]
    }
    return output.slice(0, k)
}

console.log(topKFrequent([7,7,1,2,2,7], 2))