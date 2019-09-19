function palindromeRearranging(inputString) {
    return (singles(inputString) === inputString.length % 2);
}

function singles(s) {
    var string = s.split('').sort();
    var count = 0;
    while (string.length > 1) {
        if (string[0] === string[1]) {
            string.shift();
            string.shift();
        } else {
            count++;
            string.shift();
        }
    } return string.length === 1 ? count + 1 : count;
}
