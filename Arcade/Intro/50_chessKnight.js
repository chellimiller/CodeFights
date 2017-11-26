function chessKnight(cell) {
    // Default moves
    var moves = 8;
    // Center is top-right cell + 3.5
	var topRight = 'a1';
    var xCenter = topRight.charCodeAt(0) + 3.5;
    var yCenter = topRight.charCodeAt(1) + 3.5;
    // Cell in question
    var x = Math.abs(xCenter - cell.charCodeAt(0)) + .5;
    var y = Math.abs(yCenter - cell.charCodeAt(1)) + .5;
    // What to do based on cell location
    switch (x + y) {
        case 8:
            moves -= 6;
            break;
        case 7:
            moves -= 4;
            break;
        case 6:
            moves -= 4;
            break;
        case 5:
            moves -= 2;
            break;
        case 4:
            moves -= 2;
            break;
    }
    return moves;
}
