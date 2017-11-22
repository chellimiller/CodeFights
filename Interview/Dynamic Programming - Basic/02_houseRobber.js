function houseRobber(nums) {
    // Taking care of a large portion of situations
    switch(nums.length) {
        case 0:
            return 0;
        case 1:
            return nums[0];
        case 2:
            return nums[0] > nums[1] ? nums[0] : nums[1];
        case 3:
            return nums[0]+nums[2] > nums[1] ? nums[0]+nums[2] : nums[1];
        default:
            break;
    }
    
    // We will start calculating max values at each house
    var len = nums.length;
    nums[len - 3] += nums[len - 1];
    
    // Going backwards through array to find max values
    for (var i = 4; i <= len; i++) {
        var x = len - i;
        nums[x] += nums[x+2] > nums[x+3] ? nums[x+2] : nums[x+3];
    }
    
    // Return greater of the two first elements, that's the house to start at
    return nums[0] > nums[1] ? nums[0] : nums[1];
}