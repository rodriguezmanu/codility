// An integer N is given, representing the area of some rectangle.

// The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

// The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.

// For example, given integer N = 30, rectangles of area 30 are:

// (1, 30), with a perimeter of 62,
// (2, 15), with a perimeter of 34,
// (3, 10), with a perimeter of 26,
// (5, 6), with a perimeter of 22.
// Write a function:

// function solution(N);

// that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

// For example, given an integer N = 30, the function should return 22, as explained above.

// Assume that:

// N is an integer within the range [1..1,000,000,000].
// Complexity:

// expected worst-case time complexity is O(sqrt(N));
// expected worst-case space complexity is O(1).

// 100% verified
'use strict';

function solution(n) {
    var i = 1,
        result = 0,
        minPer = Number.MAX_SAFE_INTEGER;

    while (i * i <= n) {
        if (n % i === 0) {
            result = n / i;
            minPer = Math.min(2 * (i + result), minPer);
        }
        i++;
    }
    return minPer;
}
var a = 30;
console.log(solution(a));
