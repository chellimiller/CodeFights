function alternatingSums(a) {
    var sum = [0,0];
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            sum[0] += a[i];
        } else {
            sum[1] += a[i];
        }
    } return sum;
}

