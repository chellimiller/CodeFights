function climbingStaircase(n, k) {
    // Create two arrays to be updated
    var sequences = [],
        steps = [];
    // Calling backtrack. The two arrays will be updated in memory
    backtrack(n, k, steps, sequences);
    // Return the updated sequences array
    return sequences;
}

// This function will help us with backtracking
// It is recursive and breaks the problem into its smallest parts
function backtrack(n, k, steps, sequences) {
    // If n is 0, we have reached the top of the stairs
    if (n === 0) {
        // Push a copy of the steps array into sequences
        sequences.push(steps.slice(0));
    } else {
        // i represents the size of the step a person takes
        for (let i = 1; i <= k; i++) {
            // We can't take a bigger step than the amount of steps
            if (i <= n) {
                // Push the new step
                steps.push(i);
                // We need to call backtrack on the amount of steps left to take
                backtrack(n - i, k, steps, sequences);
                // Remove the last step so we can begin adding larger steps
                steps.pop();
            }
        }
    }
}