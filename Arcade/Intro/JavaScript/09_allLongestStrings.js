function allLongestStrings(inputArray) {
    var longest = [""];
    
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest[0].length) {
            longest = [inputArray[i]];
        } else if (inputArray[i].length === longest[0].length) {
            longest.push(inputArray[i]);
        }
    }
    
    return longest;
}
