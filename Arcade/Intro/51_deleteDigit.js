function deleteDigit(n) {
    // Set position to 10 to start
    var pos = 10;
    // Initially set max to result of removing digit in one's place
    var max = (n - (n % pos)) / pos;
    // If position is greater than $n, we're done checking
    while (pos < n) {
        // New number equals digits below position
        var num = n % pos;
        // Increment position (multiply by 10)
        pos *= 10;
        // Add digits above position (divided by 10) to number
        num += (n - (n % pos))/10;
        // If the number is greater than max, update max
        if (num > max) {
            max = num;
        }
    }
    // Return max value
    return max;
}