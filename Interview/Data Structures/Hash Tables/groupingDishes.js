function groupingDishes(dishes) {
    // Making two arrays, associative and final array
    var hash = [],
        send = [];
    // Adding elements to the associative array
    for (let i in dishes) {
        for (var j = 1; j < dishes[i].length; j++) {
            if (hash[dishes[i][j]]) {
                hash[dishes[i][j]].push(dishes[i][0]);
            } else {
                hash[dishes[i][j]] = [dishes[i][0]];
            }
            // If the array in hash is two
            //  we want to add the ingredient to send array
            if (hash[dishes[i][j]].length === 2) {
                send.push([dishes[i][j]]);
            }
        }
    }
    // Sorting the send array
    send.sort();
    // Adding the dishes to each ingredient
    for (let i in send) {
        // Sorting the array of dishes
        hash[send[i]].sort();
        // Adding the elements to the ingredient array
        send[i] = send[i].concat(hash[send[i]]);
    }
    // Return array
    return send;
}