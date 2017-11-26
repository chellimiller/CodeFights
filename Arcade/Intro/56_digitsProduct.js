function digitsProduct(product) {
    
    if (product === 0) {
        return 10;
    } else if (product === 1) {
        return 1;
    }
    
    var digits = [9,8,7,6,5,4,3,2];
    var min = '';
    
    for (var i = 0; i < digits.length; i++) {
        while (true) {
            if (product % digits[i] == 0) {
                product = product / digits[i];
                min = digits[i] + min;
            } else {
                break;
            }
        }
    }
    
    return product !== 1 ? -1 : Number.parseInt(min);
}