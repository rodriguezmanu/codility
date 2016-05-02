'use strict';

function solution(a, k, m) {
    var n = a.length,
        result = 0,
        prefix = prefixSums(a),
        min = Math.min(m, k);

    for (var p = 0; p < min + 1; p++) {
        var leftPos = k - p;
        var rightPos = Math.min(n - 1, Math.max(k, k + m - 2 * p));
        result = Math.max(result, countTotal(prefix, leftPos, rightPos));
    }
    for (var p = 0; p < Math.min(m + 1, n - k); p++) {
        var rightPos = k + p;
        var leftPos = Math.max(0, Math.min(k,  k - (m - 2 * p)));
        result = Math.max(result, countTotal(prefix, leftPos, rightPos));
    }
    return result;
}

function prefixSums(a) {
    var n = a.length,
        p = new Array(a.length + 1).fill(0);

    for (var i = 1; i < n + 1; i++) {
        p[i] = p[i - 1] + a[i - 1];
    }
    return p;
}

function countTotal(p, a, b) {
    return (p[b + 1] - p[a]);
}
var a = [2, 3, 7, 5, 1, 3, 9];
var k = 4;
var m = 6;

console.log(solution(a, k, m));//25