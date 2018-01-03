function swapAdjacentBits(n) {
    return (n < 4 ? 0 : 4*swapAdjacentBits(Math.floor(n/4))) + ((n%4) === 1 ? 2 : (n%4) === 2 ? 1 : (n%4));
}
