'use strict';

function max(a) {
    return a.max(a);
}

function min(a) {
    return a.min(a);
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