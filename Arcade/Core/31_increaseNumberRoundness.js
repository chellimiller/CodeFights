function increaseNumberRoundness(n) {
    var nStr = n.toString(10);
    
    while(nStr.endsWith('0')) {
        nStr = nStr.slice(0, nStr.length - 1);
    }
    
    return nStr.indexOf("0") < 0 ? false : true;
}