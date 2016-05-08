// An integer X and a non-empty zero-indexed array A consisting of N integers are given. We are interested in which elements of A are equal to X and which are different from X. The goal is to split array A into two parts, such that the number of elements equal to X in the first part is the same as the number of elements different from X in the other part. More formally, we are looking for an index K such that:
// 0 ≤ K < N, and
// the number of elements equal to X in A[0..K−1] is the same as the number of elements different from X in A[K..N−1]. (For K = 0, A[0..K−1] does not contain any elements.)
// For example, given integer X = 5 and array A such that:
//   A[0] = 5
//   A[1] = 5
//   A[2] = 1
//   A[3] = 7
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
// K equals 4, because:
// two of the elements of A[0..3] are equal to X, namely A[0] = A[1] = X, and
// two of the elements of A[4..6] are different from X, namely A[4] and A[5].
// Write a function:
// function solution(X, A);
// that, given an integer X and a non-empty zero-indexed array A consisting of N integers, returns the value of index K satisfying the above conditions. If more than one index K satisfies the above conditions, your function may return any of them. If there is no such index, the function should return −1.
// For example, given integer X and array A as above, the function should return 4, as explained above.

function solution(x, a) {
    var indexFound = 0,
        indexNotFound = 0,
        b = new Array(a.length + 1).fill(0),
        c = new Array(a.length + 1).fill(0);

    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            indexFound++;
            b[i + 1] = b[i] + 1;
        } else {
            b[i + 1] = indexFound;
        }
    }

    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] !== x) {
            indexNotFound++;
            c[i] = c[i + 1] + 1;
        } else {
            c[i] = indexNotFound;
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (b[i] === c[i]) {
            return i;
        }
    }
    return -1;
}

var a = [5, 5, 1, 7, 2, 3, 5];
// var a = [];

var x = 5;
// var x = 4;

console.log(solution(x, a));
