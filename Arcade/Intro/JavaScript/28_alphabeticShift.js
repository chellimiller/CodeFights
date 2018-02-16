function alphabeticShift(inputString) {
    // Split inputString into char array
    var array = inputString.split("");
    // Loop through array
    for (let i in array) {
        // Set code equal to current char code + 1
        var code = array[i].charCodeAt(0) + 1;
        // If code is 123 (char "z"), set to "a", otherwise get next char
        array[i] = code === 123 ? "a" : String.fromCharCode(code);
    }
    // Return new string
    return array.join("");
}
