'use strict';

function solution(a, b, m) {
    var n = a.length,
        sumA = a.reduce(function (p, c) {
            return p + c;
        }),
        sumB = b.reduce(function (p, c) {
            return p + c;
        }),
        d = sumB - sumA,
        count = counting(a, m);

    if (d % 2 === 1) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (0 <= b[i] - d && b[i] - d <= m && count[b[i] - d] > 0) {
            return true;
        }
    }
}

function counting(a, m) {
    var n = a.length,
        count = new Array(m + 1).fill(0);

    for (var i = 0; i < n; i++) {
        count[a[i]] += 1;
    }
    return count;
}

var a = [1, 2, 3, 0, 1, 3];
var b = [1, 3, 1, 2, 2, 3];
var m = 6;
console.log(solution(a, b, m));
