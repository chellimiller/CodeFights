function makeArrayConsecutive2(sequence) {
	// Create variable to store count
    var count = 0;
	// Sort sequence
    sequence.sort(function sort(a,b) { return a > b });
	// Loop through sequence array
    for (let i = 1; i < sequence.length; i++) {
		// If we're missing a statue
        if (sequence[i] !== (sequence[i-1] + 1)) {
			// Add the amount missing to count
            count += (sequence[i] - (sequence[i-1] + 1));
        }
    }
	// Return count
    return count;
}