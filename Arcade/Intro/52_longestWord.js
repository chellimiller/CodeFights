function longestWord(text) {
    // Creating a variable to hold longest word
    var longestWord = "";
    // Dividing string to array of words
    var array = text.split(new RegExp(/\W/));
    // Checking each word in the array
    for (let i in array) {
        // Compare word in array to longest word
        if (array[i].length > longestWord.length) {
            // Update longest word if the array word is longer
            longestWord = array[i];
        }
        
    }
    // return longest word
    return longestWord;
}