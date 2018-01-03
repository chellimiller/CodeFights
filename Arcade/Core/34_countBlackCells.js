function countBlackCells(n, m) {
    
    /* I was struggling with this one and needed help
     * I adapted the JavaScript code from here:
     *   - http://chayemor.com/blog/codefights/loop-tunnel#10
     * The formula used is adapted from this thread:
     *   - https://math.stackexchange.com/questions/1121541/number-of-unit-squares-that-meet-a-given-diagonal-line-segment-in-more-than-one
     */
    
    // Finding greatest common divisor
    // I would like to think of a better way to do this
    var lim = Math.max(n, m),
        div = 1,
        gcd = div;
    while (div <= lim) {
        // It bothers me to check if 8 works if I've already checked 2 (and gotten no)
        // It would be better to only check primes, but I can't think of an elegant way
        div++;
        if (n % div === 0 && m % div === 0) {
            gcd = div;
        }
    }
    
    // This didn't make sense to me at first
    // I spent a few minutes looking at the linked Stack Exchange thread to get it
    return m + n + gcd - 2;
    
}