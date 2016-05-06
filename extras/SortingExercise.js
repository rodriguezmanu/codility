// You are given a zero-indexed array A consisting of n > 0 integers; you must return
// the number of unique values in array A.

'use strict';

function solution(a) {
    var n = a.length,
        result = 0;
    console.log(a.sort());
    for (var i = 1; i < n; i++) {

        if (a[i] != a[i - 1]) {
            result++;
        }
    }
    return result;

}
var a = [1, 2, 3, 3, 4];
console.log(solution(a));