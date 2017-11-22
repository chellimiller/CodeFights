function climbingStairs(n) {
    return fibonacci(n);
}

function fibonacci(input) {
    var f = [1,1,2,3,5,8,13,21,34,55];
    if (input < f.length) {
        return f[input];
    }
    var f0 = f[f.length-2],
        f1 = f[f.length-1],
        tmp;
    for (var i = f.length; i <= input; i++) {
        tmp = f0;
        f0 = f1;
        f1 += tmp;
    }
    return f1;
}