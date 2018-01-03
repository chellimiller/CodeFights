function magicalWell(a, b, n) {
    var money = 0;
    for (var i = 0; i < n; i ++) {
        money = money + (a * b);
        a++;
        b++;
    }
    return money;
}
