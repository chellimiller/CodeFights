function arrayPacking(a) {
    // Set M to last element
    var M = a.pop();
    
    while (a.length > 0) {
        // Bitwise shift M 8 bits
        M = M << 8;
        // Add new last element of a
        M += a.pop();
    }
    
    // Return M
    return M;
}
