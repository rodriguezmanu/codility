var a = [2, 0, 1, 0, 2, 1],
    m = 5;

console.log(counting(a, m));

function counting(a, m) {
    var n = a.length,
        count = new Array(m + 1).fill(0);

    for (var i = 0; i < n; i++) {
        count[a[i]] += 1;
    }
    return count;
}