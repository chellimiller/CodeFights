function secondRightmostZeroBit(n) {
  return ((n | n+1) + 1 & ~(n | n+1)) ;
}
