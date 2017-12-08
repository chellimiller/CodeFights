//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    // Special case, null node and goal sum of 0
    if (t === null && s === 0) {
        // Return true
        return true;
    }
    // Otherwise return result of search
    return search(t, 0, s);
}
// Recursive function to search tree
function search(node, sum, goal) {
    // If node exists
    if (node) {
        // If we reached the end
        if (node.left === null && node.right === null) {
            // Check if sum equals the goal
            return node.value + sum === goal;
        }
        // If left side exists
        if (node.left) {
            // Search left side and return true if sum is found
            if (search(node.left, sum+node.value, goal)) {
                return true;
            }
        }
        // Same as above, but for right side
        if (node.right) {
            if (search(node.right, sum+node.value, goal)) {
                return true;
            }
        }
    }
    // Return false if no match was found or if node is null
    return false;
}