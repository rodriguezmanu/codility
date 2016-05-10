// Write a function:

// function solution(A);

// that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

// For example, given:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 6
//   A[3] = 4
//   A[4] = 1
//   A[5] = 2
// the function should return 5.

// Assume that:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

// 100% verified

function solution(a) {
    var o = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            o[a[i]] = 'exist';//could any value, it's just a reference
        }
    }
    for (var j = 1; j < o.length; j++) {
        if (o[j] === undefined) {
            return j;
        }
    }
    return j;
}

// var a =  [1, 3, 6, 4, 1, 2];
var a =  [1, 3, 6, 4, 1, 2, 8, -2];

console.log(solution(a));