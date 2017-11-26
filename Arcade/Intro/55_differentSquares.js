function differentSquares(matrix) {
    // Get width/height and set max
    var width = matrix[0].length - 1,
		height = matrix.length - 1,
		max = width * height;
    // Return max if it is 1 or 0
	if (max <= 1) { return max; }
    // Find all squares
    var squares = [];
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            // Create a sum to represent each square
            var sq = 1000 * matrix[i][j];
            sq += 100 * matrix[i][j+1];
            sq += 10 * matrix[i+1][j];
            sq += matrix[i+1][j+1];
            // Push sum for each square
            squares.push(sq);
        }
    }
    // Return number of unique elements
    return  Array.from(new Set(squares)).length;
}