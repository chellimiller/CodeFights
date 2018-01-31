function isSmooth(arr) {
    if (arr[0] !== arr[arr.length-1]) {
        return false;
    }
    var mid = Math.floor(arr.length/2);
    if (arr.length % 2 === 0) {
        return arr[0] === (arr[mid] + arr[mid-1]);
    }
    return arr[0] === arr[mid];
}
// A few less lines of code
function isSmooth_v2(arr) {
    var x = Math.floor(arr.length/2),
        mid = arr[x];
    if (arr.length % 2 === 0) {
        mid += arr[x - 1];
    }
    return arr[0] === mid ? arr[0] === arr[arr.length - 1] : false;
}
// 3 lines of code
function isSmooth_v3(arr) {
    var x = Math.floor(arr.length/2),
        mid = arr.length % 2 === 0 ? arr[x] + arr[x - 1] : arr[x];
    return arr[0] === mid ? arr[0] === arr[arr.length - 1] : false;
}
// One very gross line
function isSmooth_v4(arr) {
    return arr[0] !== arr[arr.length - 1] ? false : arr[0] === (arr.length % 2 === 0 ? arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2) - 1] : arr[Math.floor(arr.length/2)]);
}
