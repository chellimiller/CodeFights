/* This is my second version of this exercise
 *  It's a standalone recursive function
 */
function hasPathWithGivenSum(t, s) {
	// If node is null and goal sum is 0, return true
    if (t === null) {
        return s === 0;
    }
	// If t.left exists (not null)
    if (t.left) {
		// Check left side for sum
        if (hasPathWithGivenSum(t.left, s-t.value)) {
            return true;
        } else if (t.right === null) {
			// If left side doesn't contain sum
			//   and t.right is null, return false
            return false;
        }
    }
	// Otherwise we can return the result of the right side
    return hasPathWithGivenSum(t.right, s-t.value);
}