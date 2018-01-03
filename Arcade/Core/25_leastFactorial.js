function leastFactorial(n) {
    var k = 1; var m = 1;
    
    while (k < n) {
        k = k * m;
        m++;
    }
    
    return k;
}
