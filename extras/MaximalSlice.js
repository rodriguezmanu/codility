'use strict';

function solution(a) {
    var maxSlice = 0,
        maxEnding = 0;

    for (var i = 0; i < a.length; i++) {
        maxEnding = Math.max(0, maxEnding + a[i]);
        maxSlice = Math.max(maxSlice, maxEnding);
    }
    return maxSlice;
}
var a = [5, -7, 3, 5, -2, 4, -1];

console.log(solution(a));
