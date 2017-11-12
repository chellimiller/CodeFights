function checkPalindrome(inputString) {
    var len = inputString.length;
    for (var i = 0; i < len/2; i++) {
        if (inputString.charAt(i) !== inputString.charAt(len-1-i)) {
            return false;
        }
    } return true;
}
