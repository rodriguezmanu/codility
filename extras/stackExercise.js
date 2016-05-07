'use strict';

function groceryStore(a) {
    var n = a.length,
        result = 0,
        size = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i]) {
            size++;
        } else {
            size--;
            result = Math.max(result, size);
        }
    }
    return result;
}
var a = [1, 1, 0, 0, 1, 0];
console.log(groceryStore(a));