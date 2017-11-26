function tennisSet(score1, score2) {
    var scores = [score1, score2];
    scores.sort();
    switch (scores[1]) {
        case 6:
            return scores[0] < 5;
        case 7:
            return scores[0] >= 5 && scores[0] !== 7;
        default:
            return false;
    }
}
