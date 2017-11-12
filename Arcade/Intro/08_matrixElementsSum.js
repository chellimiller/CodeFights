function matrixElementsSum(matrix) {
    var total = matrix[0].reduce(sum, 0);
    
    for (var i = 1; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i-1][j] === 0) {
                matrix[i][j] = 0;
            } else {
                total += matrix[i][j];
            }
        }
    }
    return total;
    
} function sum(a, b) {
    return a + b;
}
