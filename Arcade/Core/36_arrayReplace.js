function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	// Loop over inputArray
    for (let i in inputArray) {
		// If the current element matches the element to replace
        if (inputArray[i] === elemToReplace) {
			// Set current element to the substitution element
            inputArray[i] = substitutionElem;
        }
    }
	// Return updated array
    return inputArray;
}
