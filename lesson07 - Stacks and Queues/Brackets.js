// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Assume that:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

// 100% verified
'use strict';

// var a = '{[()()]}';//1
var a = '([)()]';//0
// var a = '';//1
console.log(solution(a));

function solution(s) {
    var stack = [],
        s1,
        s2;

    for (var i = 0; i < s.length; i++) {
        s1 = s[i];

        if (s1 === '(' || s1 === '[' || s1 === '{') {
            stack.push(s1);
        } else {
            s2 = stack.pop();
            if ((s1 === ')' && s2 !== '(') ||
                (s1 === ']' && s2 !== '[') ||
                (s1 === '}' && s2 !== '{')) {
                return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}
