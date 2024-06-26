// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.
//
//
//
// Example 1:
//
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Algos
// 1) save elements in hashmap
// 2) In second loop check, if currNum + 1 is in prevMap, if yes increment result variable

// Key point: use hashmap to fastly check if number is in array

const countElements = function(arr) {
    const prevMap = {}
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in prevMap) {
            prevMap[arr[i]]++;
        } else {
            prevMap[arr[i]] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        const numBig = arr[i] + 1
        if (numBig in prevMap) {
            output++
        }
    }
    return output;
}

console.log(countElements([1,2,3]))