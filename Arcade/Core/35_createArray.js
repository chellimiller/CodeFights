function createArray(size) {
	// Create variable array
    var array = [];
	// Create while loop
    while (size != 0) {
		// Push a 1 to the array
        array.push(1);
		// Decrement size
        size--;
    }
	// return filled array
    return array;
}

function createArray_v2(size) {
	// Create variable array
    var array = [];
	// Set length to size
    array.length = size;
	// Fill array with 1s
	array.fill(1);
	// return filled array
    return array;
}

// Version with one line of code
function createArray_v3(size) {
    return new Array(size).fill(1);
}