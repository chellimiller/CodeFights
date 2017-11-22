function avoidObstacles(inputArray) {
    inputArray.sort();
    var jumps = 2;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % jumps == 0) {
            jumps++;
            i = 0;
        }
    }
    return jumps;
}
