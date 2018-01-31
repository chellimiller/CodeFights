function firstReverseTry(arr) {
	// If the array length is greater than 1
    if (arr.length > 1) {
		// Create temp variable to store last element
        let temp = arr.pop();
		// Push first element value to end of array
        arr.push(arr[0]);
		// Set first element to the temp element
        arr[0] = temp;
    }
	// Return updated array
    return arr;
}
