function adjacentElementsProduct(inputArray) {
    var max = inputArray[0] * inputArray[1];
    for (var i = 2; i < inputArray.length; i++) {
        if (inputArray[i-1] * inputArray[i] > max) {
            max = inputArray[i-1] * inputArray[i];
        }
    } return max;
}
