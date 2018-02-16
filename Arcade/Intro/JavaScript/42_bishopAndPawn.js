function bishopAndPawn(bishop, pawn) {
    var distA = pawn.charCodeAt(0) - bishop.charCodeAt(0),
        distB = pawn.charCodeAt(1) - bishop.charCodeAt(1);
    return Math.abs(distA) === Math.abs(distB);
}
