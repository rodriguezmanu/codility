'use strict';

function max(a) {
    return a.max();
}

function min(a) {
    return a.min();
}

function minA(argument) {
    var min = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

function maxA(argument) {
    var max = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

var a = [-10, 10, 20, 40, 1000];

console.log(max(a));
console.log(min(a));

console.log(maxA(a));
console.log(minA(a));
