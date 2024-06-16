// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
//
// We repeatedly make duplicate removals on s until we no longer can.
//
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
//
//
//
// Example 1:
//
// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Algos
// 1) Use stack to check if previous letter is the same, if yes pop it from stack, otherwise append new letter
// 2) join array(stack) to make string and return it

// Key point: use stack DS

const removeDuplicates = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length-1]) {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    let output = stack.join('');
    return output;
}

console.log(removeDuplicates('abbaca'));