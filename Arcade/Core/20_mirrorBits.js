function mirrorBits(a) {
    var input  = a;
    var binArr = [];
    var i; var out = 0;
    
    while(input > 0) {
        binArr.unshift(input%2);
        input = (input-input%2)/2;
    }
    
    for (i = 0; i < binArr.length; i++) {
        if (binArr[i] == 1) {
            out += Math.pow(2, i);
        }
    }
    
    return out;
}
