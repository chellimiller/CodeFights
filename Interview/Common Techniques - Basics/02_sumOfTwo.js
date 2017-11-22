function sumInRange(nums, queries) {
    var preSum = prefixSums(nums),
        sum = 0,
        mod = 1000000007;
    for (let i in queries) {
        var q = queries[i];
        sum += preSum[q[1]];
        if (q[0] > 0) {
            sum -= preSum[q[0]-1];
        }
    }
    return sum > 0 ? sum % mod: mod + (sum % mod);
}

function prefixSums(array) {
    var arr = array.slice(0);
    for (var i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1];
    }
    return arr;
}