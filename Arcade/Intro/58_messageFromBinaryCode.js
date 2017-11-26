function messageFromBinaryCode(code) {
    var letter, number; 
    var message = "";
    
    while (code != '') {
        letter = code.substr(0,8);
        number = Number.parseInt(letter,2);
        message += String.fromCharCode(number);
        code = code.substr(8);
    }
    
    return message;
}
