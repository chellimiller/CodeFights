function phoneCall(min1, min2_10, min11, s) {
    var money = s; var minutes = 0; var i;
    
    if (money >= min1) {
        money = money - min1;
        minutes++;
    } else {
        return 0;
    }
    
    for (i = 2; i <= 10; i++) {
        if (money < min2_10) {
            return minutes;
        } else {
            money = money - min2_10;
            minutes++;
        }
    }
    
    while (true) {
        if (money < min11) {
            return minutes;
        } else {
            money = money - min11;
            minutes++;
        }
    }
}
