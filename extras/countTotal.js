//Problem: You are given an integer n. Count the total of 1+2+ ... + n.
//
'use strict';

//O(n)
function solutionA(n) {
    var res = 0;
    for (var i = 1; i <= n; i++) {
        res =  res + i;
    }
    return res;
}

//better performance
//O(1)
function solutionB(n) {
    return (n * (n + 1) / 2);
}
var n = 4

console.log(solutionA(n));
console.log(solutionB(n));
