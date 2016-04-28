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

function solution(a) {
    var n = a.length,
        sum = 0,
        sumA = 0,
        o = {};

    for (var i = 0; i < a.length; i++) {
        sumA += a[i];
        // if (o[a] === 1) {
        //     return 0;
        // }
        // else {
        //     o[a] = 1;
        // }
    }
    sum = n * (n + 1) / 2;
    if ((sum - sumA) === 0) {
        return 1;
    } else {
        return 0;
    }
}


function solutionA(A) {
    var sum = 0;
    var numbers = {};

    // A.sort();

    // if (A[0] !== 1) {
    //     return 0;
    // }


    for (var i = 0; i < A.length; i++) {
        var a = A[i];
        sum += a;
        console.log(numbers[a]);
        if (numbers[a] === 1) {
            return 0;
        }
        else {
            numbers[a] = 1;
        }
        console.log(numbers[a]);
        console.log('---');
    }

    var n = A.length;
    var sum_n = (n * (n + 1)) / 2;
    var difference = sum_n - sum;

    if (difference !== 0) return 0;

    return 1;
}


var a = [4, 3, 1, 2];//1
// var a = [4, 3, 1];//0
// var a = [2, 3, 4];//0


console.log(solution(a));
// console.log(solutionA(a));


