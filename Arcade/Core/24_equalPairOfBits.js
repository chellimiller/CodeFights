function equalPairOfBits(n, m) {
    return ((n%2)^(m%2))===1 ? 2*equalPairOfBits(Math.floor(n/2),Math.floor(m/2)) : 1;;
}
