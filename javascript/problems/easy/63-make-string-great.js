// Given a string s of lower and upper case English letters.
//
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
//
//     0 <= i <= s.length - 2
//     s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
//
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
//
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
//
// Notice that an empty string is also good.
//
//
//
// Example 1:
//
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

// Algos
// 1) Use stack DS
// 2) Check if letters are the same, we can do this knowing that 'A' has code 65 and 'a' has 97, so we can just check
// if their codes are the same with adding or subtract 32
// 3) If codes are same we .pop() from stack otherwise we .push() to stack;

// Key point: use stack DS and charCode to get unicode code of character

const makeGood = function(s) {
    const stack = [''];
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) + 32 === stack[stack.length-1].charCodeAt(0) ||
            s.charCodeAt(i) - 32 === stack[stack.length-1].charCodeAt(0)
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    console.log('a'.charCodeAt(0))
    return stack.join('');
}

console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));
console.log(makeGood('s'));
console.log(makeGood('Pp'));
