function removeArrayPart(inputArray, l, r) {
    return inputArray.slice(0,l).concat(inputArray.slice(r+1));
}