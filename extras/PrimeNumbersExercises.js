'use strict';

function divisors(n) {
    var i = 1,
        result = 0;
    while (i * i < n) {
        if (n % i === 0) {
            result += 2;
        }
        i++;
    }
    if (i * i === n) {
        result++;
    }
    return result;
}

function primality(n) {
    var i = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

console.log(divisors(30));
console.log(primality(6));
console.log(primality(11));
