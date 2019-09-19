function digitDegree(n) {
    // Check if we're already in single digits
    if ((n - (n % 10))/10 === 0) {
        return 0;
    }
    // If not, get sum of digits
    var sum = 0;
    while (n !== 0) {
        sum += n % 10;
        n = (n - (n % 10))/10;
    }
    // Return 1 + digitDegree of sum
    return 1 + digitDegree(sum);
}
