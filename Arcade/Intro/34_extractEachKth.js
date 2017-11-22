function extractEachKth(inputArray, k) {
    var newArr = [];
    for (var i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            newArr.push(inputArray[i]);
        }
    }
    return newArr;
}
