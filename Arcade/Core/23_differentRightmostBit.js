function differentRightmostBit(n, m) {
  return ((n%2)^(m%2))===0 ? 2*differentRightmostBit(Math.floor(n/2),Math.floor(m/2)) : 1;
}
