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

function solution1(A, B, K) {
    if (A % K == 0) {
        return Math.floor((B - A) / K + 1);
    }  else {
        return Math.floor((B - (A - A % K)) / K);
    }
}
console.log(solution1(a, b, k));

// The way to solve this problem is by Prefix Sums
// Using this technique one can subtract the count of integers between 0 and A that are divisible by K (A/K+1) from the the count of integers between 0 and B that are divisible by K (B/K+1).

// Remember that A is inclusive so if it is divisible then include that as part of the result.

function solution2(A, B, K) {
    var b = B / K + 1;  // From 0 to B the integers divisible by K
    var a = A / K + 1;  // From 0 to A the integers divisible by K
    if (A % K == 0) { // "A" is inclusive; if divisible by K then
        a--;        //   remove 1 from "a"
    }
    return Math.floor(b - a);     // return integers in range

}
console.log(solution2(a, b, k));

