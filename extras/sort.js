function sortAsc(a) {
    return a.sort(function(a, b){return a-b});
}

function sortDesc(a) {
    return a.sort(function(a, b){return b-a});
}

var a = [3, 5, 4];
console.log(sortDesc(a));
console.log(sortAsc(a));
