function electionsWinners(votes, k) {
    // Sort the votes so their easier to go through
    votes.sort(function(a,b){return a-b});
    // If we're done voting, check if there is a winner
    if (k === 0) {
        return votes[votes.length - 1] === votes[votes.length - 2] ? 0 : 1;
    }
    // For loop to check for eligible candidates
    var candidates = 0, 
        maxVotes = votes[votes.length-1];
    for (let i in votes) {
        if (votes[i] + k > maxVotes) {
            candidates++;
        }
    }
    return candidates;
}
