// A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
//
// For example, consider array A such that:
//
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:
//
// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:
// function solution(A);
// that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.
//
// For example, given:
//
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.
//
// Assume that:
//
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

//100% verified

function solution(a) {
    var total = 0,
        result = 0,
        add = 0,
        min = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    for (var i = 0; i <  a.length - 1; i++) {
        total = (total - a[i]);
        add += a[i];
        result = Math.abs((total - add));
        if (result < min) {
            min = result;
        }
    }
    return min;
}

var a = [3, 1, 2, 4, 3];

console.log(solution(a));
