var a = [1, 2, 3, 4];

console.log(prefixSums(a));

function prefixSums(a) {
    var n = a.length,
        p = new Array(a.length + 1).fill(0);//es6 way

    // for (var i = 0; i < p; i++) {//not es6
    //     p[i] = 0;
    // }

    for (var i = 1; i < n + 1; i++) {
        p[i] = p[i - 1] + a[i - 1];
    }
    return p;
}