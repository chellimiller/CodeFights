function variableName(name) {
    // Check if first character is a digit
    if (name.charAt(0).match(/[0-9]/)) {
        return false;
    }
    // Check if there is a character that isn't a letter, digit, or _
    if (name.match(/[^a-zA-Z0-9_]/)) {
        return false;
    }
    
    return true;
}

