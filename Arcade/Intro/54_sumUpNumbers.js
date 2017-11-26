function sumUpNumbers(inputString) {
    // Create array of numbers
    var numbers = inputString.split(new RegExp(/\D/));
    // Set sum equal to zero
    var sum = 0;
    // Loop through array
    for (let i in numbers) {
        // If the character isn't a space, add it to current number
        if (numbers[i] !== "") {
            sum += parseInt(numbers[i],10);
        }
    }
	return sum;
}