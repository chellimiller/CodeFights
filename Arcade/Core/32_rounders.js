function rounders(value) {
    var tens = Math.floor(value/10),
        carry = value % 10 < 5 ? 0 : 1;
    return tens === 0 ? value : 10 * rounders(tens + carry);
}