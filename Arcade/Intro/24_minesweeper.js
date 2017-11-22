function minesweeper(matrix) {
    var mines = [];
    
    // Get height and width of matrix
    var width = matrix[0].length;
    var height = matrix.length;
    
    for (var i = 0; i < height; i++) {
        // Reinitialize array as empty array
        var arr = [];
        for (var j = 0; j < width; j++) {
            // Reset count to zero
            var count = 0;
            for (var x = -1; x < 2; x++) {
                for (var y = -1; y < 2; y++) {
                    if (y === 0 && x === 0) {
                        // We don't want to count current cell
                    } else if ((i+x) >= 0 && (j+y) >= 0 && (i+x) < height && (j+y) < width) {
                        // Once we know cell is in bounds, we can check if it's true
                        count += matrix[i+x][j+y] === true ? 1 : 0;
                    }
                }
            }
            // Push count to the array
            arr.push(count);
        }
        // Push array to multidimensional array
        mines.push(arr);
    }
    
    return mines;
}