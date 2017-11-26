// I did v1 a long time ago and didn't like it.
// This is an updated (and I believe better) version
function phoneCall(min1, min2_10, min11, s) {
    if (min1 > s) {
        return 0;
    }
    s -= min1;
    var min = 1;
    for (var i = 2; i <= 10; i++) {
        if (s < min2_10) {
            return min;
        } else {
            s -= min2_10;
            min++;
        }
    }
    return min + Math.floor(s/min11);
}
