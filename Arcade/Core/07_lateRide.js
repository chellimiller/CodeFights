function lateRide(n) {
    var hhmm = Math.floor(n/60).toString(10) + (n % 60).toString(10),
        sum = 0;
    for (let digit in hhmm) {
        sum += parseInt(hhmm[digit], 10);
    }
    return sum;
}