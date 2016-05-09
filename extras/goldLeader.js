
'use strict';

function solution(a) {
    var n = a.length,
        size = 0,
        value,
        candidate = -1,
        leader = -1,
        count = 0;

    for (var i = 0; i < a.length; i++) {
        if (size === 0) {
            size++;
            value = a[i];
        } else if (value !== a[i]) {
            size--;
        } else {
            size++;
        }
    }

    if (size > 0) {
        candidate = value;
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] === value) {
            count++;
        }
    }

    if (count > n / 2) {
        leader = candidate;
    }
    return leader
}
var a = [4, 6, 6, 6, 6, 8, 8];

// var a = [4, 2, 4, 4, 4, 2];
// var a = [1, 2, 3, 4];
console.log(solution(a));
