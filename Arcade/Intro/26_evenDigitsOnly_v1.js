function evenDigitsOnly(n) {
    while (true) {
        if (n === 0) {
            // If n has been reduced to zero with no odd digits, return true
            return true;
        } else if (((n % 10) % 2) !== 0) {
            // If digit in one's place is odd, return false
            return false;
        } else {
            // Remove digit currently in one's place
            n = (n - (n % 10)) / 10;
        }
    }
}