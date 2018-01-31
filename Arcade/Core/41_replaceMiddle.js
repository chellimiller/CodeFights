function replaceMiddle(arr) {
    if (arr.length%2 == 0) {
        var m = arr.length/2;
        var e = arr[m] + arr[m-1];
        arr.splice(m-1, 2, e); 
    }
    return arr;
}

function replaceMiddle_v2(arr) {
    let len = arr.length;
    if (len % 2 === 0) {
		// Splice array if it has even number of elements
        arr.splice(len/2-1, 2, (arr[len/2] + arr[(len/2)-1])); 
    }
    return arr;
}
// One disgusting line of code
function replaceMiddle_v3(arr) {
    return arr.length % 2 !== 0 ? arr : arr.slice(0, (arr.length/2) - 1).concat(arr[arr.length/2] + arr[(arr.length/2)-1]).concat(arr.slice((arr.length/2)+1));
}
