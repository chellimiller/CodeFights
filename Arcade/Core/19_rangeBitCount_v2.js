// I feel this is much easier to understand.
// In this case, using strings seems to work best
function rangeBitCount(a, b) {
    var str = "";
    
    for (var i = a; i <= b; i++) {
        str += i.toString(2);
    }
    
    return str.replace(/0/g,"").length;
}
