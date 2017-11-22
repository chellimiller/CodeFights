function lineEncoding(s) {
    // Replace a multiple of 1 or more chars with the char count + char
    return s.replace(/(.)\1*/g, (a,b) => b==a ? b : a.length + b);
}