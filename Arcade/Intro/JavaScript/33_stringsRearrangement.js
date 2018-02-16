function stringsRearrangement(inputArray) {
    // Loop through array for nodes
    for (let i in inputArray) {
        // Creating a duplicate array using slice
        var subArr = inputArray.slice(0);
        // Using splice to remove current element
        subArr.splice(i,1);
        // If we found a valid path, return true
        if (path(inputArray[i], subArr)) { return true; }
    }
    // No valid path found, return false
    return false;
}

/* This is my implementation of the Levenshtein Algorithm
 * I used Wikipedia to learn about it and adapted it to my needs
 * It's probably not the best implementation, but it does the job!
 */
function levenshtein(s1,s2) {
    // Test if first characters of strings match
    var cost = s1.charAt(0) === s2.charAt(0) ? 0 : 1;
    // Slice strings if bigger than one
    // Get cost between rest of s1 and s2
    if (s1.length !== 1) {
        s1 = s1.slice(1);
        s2 = s2.slice(1);
        cost += levenshtein(s1,s2);
    }
    // Return cost
    return cost;
}

/* Searching for valid path */
function path (node, array) {
    // If the array has one element, we won't loop
    if (array.length === 1) {
        // If levenshtein returns 1, return true, else false
        return levenshtein(node,array[0]) === 1;
    }
    // Loop through array
    for (let i in array) {
        // Check if the levenshtein function returns 1
        if (levenshtein(node,array[i]) === 1) {
            // Creating a sub array
            // Using slice to copy and splice to remove current element
            var sub = array.slice(0);
            sub.splice(i,1);
            // Recursive part of this function
            if (path(array[i],sub)) { return true; }
        }
    }
    // Return false because code reached this point
    return false;
}