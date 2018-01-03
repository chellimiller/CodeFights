function countSumOfTwoRepresentations2(n, l, r) {
    var a = l,
        b = n-l,
        count = 1;
    
    if (b > a) {
        while (true) {
            a++;
            b--;
            if (a > b) {
                break;
            } else if (a === b) {
                count++;
                break;
            } else if (b < r) {
                count++;
            }
        }
        return count;
        
    }
    
    return a === b ? 1 : 0;
}
