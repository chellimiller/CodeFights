function appleBoxes(k) {
    var yApples = 0,
        rApples = 0;
    
    for (var i = 0; i <= k; i++) {
        if (i % 2 == 0) {
            rApples += i*i;
        } else {
            yApples += i*i;
        }
    }
    
    return rApples - yApples;
}
