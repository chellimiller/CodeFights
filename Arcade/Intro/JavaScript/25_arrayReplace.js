function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (let i in inputArray) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}
