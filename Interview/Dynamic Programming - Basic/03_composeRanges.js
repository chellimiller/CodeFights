function composeRanges(nums) {
    var ranges = [];
	// Return empty array if nums.length is 0
    if (nums.length === 0) {
        return ranges;
    }
	// Keep track of bottom of range
    var begin = nums[0];
	// Find all the ranges
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1] + 1) {
            ranges.push(getRange(begin,nums[i-1]));
            begin = nums[i];
        }
    }
	// Push the final range to the array and return array
    ranges.push(getRange(begin,nums[nums.length-1]));
    return ranges;
}

// Format range as a string
function getRange(a,b) {
    return a === b ? a.toString(10) : a.toString(10) + "->" + b.toString(10);
}
