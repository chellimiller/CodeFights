function isBeautifulString(inputString) {
    var arr = charSort(inputString),
        max = arr.length,
        count = 1,
        code = 97;
    
    if (!checkChar(arr[0], code)) { return false; }
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            max = count;
            count = 0;
            code++;
            if (!checkChar(arr[i], code)) { return false; }
        }
        count++;
        if (count > max) { return false; }
    }
    return true;
}

function checkChar(char, code) {
    return char === String.fromCharCode(code);
}
function charSort(string) {
    var array = string.split("");
    return array.sort();
}