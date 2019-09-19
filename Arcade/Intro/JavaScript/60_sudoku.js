function sudoku(grid) {
    var columns = [];
    for (var i = 0; i < grid.length; i++) {
        columns.push([grid[0][i],grid[1][i],grid[2][i],grid[3][i],grid[4][i],
                     grid[5][i],grid[6][i],grid[7][i],grid[8][i]]);
    }
    for (var i = 0; i < grid.length; i++) {
        if (i % 3 === 0) {
            for (var j = 0; j < grid.length/3; j++) {
                var col = j*3;
                var square = [grid[i][col],grid[i][col+1],grid[i][col+2],
                              grid[i+1][col],grid[i+1][col+1],grid[i+1][col+2],
                              grid[i+2][col],grid[i+2][col+1],grid[i+2][col+2]];
                if (unique(square) === false) {
                    return false;
                }
            }
        }
        if (unique(grid[i]) === false) {
            return false;
        } else if (unique(columns[i]) === false ) {
            return false;
        }
    }
    return true;
}

function unique(array) {
    array.sort();
    for (i = 0; i < array.length; i++) {
        if (array[i] !== i + 1) {
            return false;
        }
    }
    return true;
}
