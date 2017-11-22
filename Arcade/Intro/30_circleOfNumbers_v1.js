function circleOfNumbers(n, firstNumber) {
	// Calculate the radius, n/2
    var radius = n/2;
    // If first number is greater than radius, return the sum, else return the difference
    if (firstNumber < radius) {
        return firstNumber + radius;
    }  else {
        return firstNumber - radius;
    }
}
