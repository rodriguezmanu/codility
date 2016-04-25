'use strict';
var a = [1,2,3],
    b = [1,2,3],
    c;

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        if (c === undefined) {
            c = '*';
        } else {
            c =  c.concat('*')
        }
        console.log(c);
    }
}
