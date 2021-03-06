// A non-empty zero-indexed array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A);

// that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.

// Given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.

// Assume that:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

// 100% verified

function solution(a) {
    var n = a.length,
        sum = 0,
        sumA = 0,
        b = new Array(a.length + 1).fill(0);

    for (var i = 0; i < a.length; i++) {
        var ai = a[i];
        sumA += a[i];
        if (b[ai] === ai) {
            return 0;
        } else {
            b[ai] = ai;
        }
    }
    sum = n * (n + 1) / 2;
    if ((sum - sumA) === 0) {
        return 1;
    } else {
        return 0;
    }
}

var a = [4, 3, 1, 2];//1
// var a = [4, 3, 1];//0
// var a = [2, 3, 4];//0

console.log(solution(a));
