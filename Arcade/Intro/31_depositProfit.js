function depositProfit(deposit, rate, threshold) {
    // Initialize year to zero and value to deposit
    var year = 0;
    var value = deposit;
    // While the threshold is greater than the value, increase year and value
    while (threshold > value) {
        value += value * rate / 100;
        year++;
    }
    // Return year after while loop breaks
    return year;
}

