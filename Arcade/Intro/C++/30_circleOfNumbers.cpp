int circleOfNumbers(int n, int firstNumber) {
    int result=firstNumber+n/2;
    result%=n;
    return result;
}

