function additionWithoutCarrying(param1, param2) {
    var p1, p2, p;
    var sum = 0,
        digit = 1;
    
    while (true) {
        p1 = param1 % 10;        
        p2 = param2 % 10;
        p = p1 + p2;
        if (p >= 10) {
            p -= 10;
        }
        sum += p * digit
        
        param1 = (param1-p1) / 10;
        param2 = (param2-p2) / 10;
        digit = digit * 10;
        
        if (param1 == 0 && param2 == 0) {
            break;
        }
    }
    
    return sum;
}
