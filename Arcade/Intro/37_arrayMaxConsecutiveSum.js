function arrayMaxConsecutiveSum(inputArray, k) {
    var max = inputArray.slice(0,k).reduce(sum),
        tmp = max;
    for (var i = k; i < inputArray.length; i++) {
        tmp += inputArray[i] - inputArray[i-k];
        max = tmp > max ? tmp : max;
    }
    return max;
}

function sum(n1,n2) { return n1 + n2; }