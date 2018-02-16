function chessBoardCellColor(cell1, cell2) {
    var dcol = cell1.charCodeAt(0)-cell2.charCodeAt(0);
    var drow = cell1.charCodeAt(1)-cell2.charCodeAt(1);
    return (dcol + drow) % 2 !== 0 ? false : true;
}

