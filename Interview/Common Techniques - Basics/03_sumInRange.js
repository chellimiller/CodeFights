function sumOfTwo(a, b, v) {
    
    // Create array for object-key-value pairs
    var hash = {};
    
    // Set difference to true in hash array
    b.forEach((i) => hash[v-i] = true);
    
    // Check if elements in a are in hash array
    for (let j of a) {
        if(hash[j]) {
            return true;
        }
    }
    
    // Return false if we've gotten to this point
    return false;
}