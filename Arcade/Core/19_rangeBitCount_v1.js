// I'm not a huge fan of this way (I did it a long time ago)
// Therefore, I made a second version
function rangeBitCount(a, b) {
    var t,
        sum = 0;
    
    for (var i = a; i <= b; i++) {
        t = i;
        while (t > 0) {
            if (t % 2 == 1) {
                t--;
                sum++;
            }
            t = t/2;
        }
    }
    
    return sum;
}
