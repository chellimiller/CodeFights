function candles(candlesNumber, makeNew) {
    var left = candlesNumber,
        burn = candlesNumber;
    while (candlesNumber !== 0) {
        candlesNumber = Math.floor(left/makeNew);
        left = (left % makeNew) + candlesNumber;
        burn += candlesNumber;
    }
    return burn;
}
