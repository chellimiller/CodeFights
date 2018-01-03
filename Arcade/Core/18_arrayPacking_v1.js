// I did this one a long time ago and I hate it
// I'll be adding a new version
function arrayPacking(a) {
    var b = ""; var bM = "";
    var i; var M;
    
    for (i = 0; i < a.length; i++) {
        b = a[i].toString(2);
        if (b.length < 8) {
            b = "0".repeat(8-b.length) + b;
        }
        bM = b + bM;
    }
    
    i = parseInt(bM, 2);
    
    return i;
}
