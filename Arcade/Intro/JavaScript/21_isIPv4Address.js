function isIPv4Address(inputString) {
    
    var array = inputString.split('.');
    if (array.length !== 4) { return false; }
    
    var pattern = new RegExp("[^0-9]");
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 255 || array[i] < 0 || array[i] === '') {
            return false;
        } else if (pattern.test(array[i])) {
            return false;
        }
    } return true;
}

