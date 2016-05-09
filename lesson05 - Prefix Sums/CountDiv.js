// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// Assume that:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.
// Complexity:

// expected worst-case time complexity is O(1);
// expected worst-case space complexity is O(1).

// 100% verified
'use strict';

function solution(a, b, k) {
    var min,
        max;

    if (a % k > 0) {
        min = a - (a % k) + k;
    } else {
        min = a;
    }

    if (b % k > 0) {
        max = b - (b % k);
    } else {
        max = b;
    }

    return 1 + (max - min) / k;
}
var a = 6;
var b = 11;
var k = 2;
console.log(solution(a, b, k));