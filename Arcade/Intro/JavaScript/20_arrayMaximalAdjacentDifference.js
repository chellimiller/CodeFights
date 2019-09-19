function arrayMaximalAdjacentDifference(inputArray) {
    
    var max = Math.abs(inputArray[0] - inputArray[1]);
    
    for (var i = 2; i < inputArray.length; i++) {
        var diff = Math.abs(inputArray[i] - inputArray[i-1]);
        max = diff > max ? diff : max;
    } 
    
    return max;
}
