function variableName(name) {
    // Exactly like before but with only one line
    return name.charAt(0).match(/[0-9]/) || name.match(/[^a-zA-Z0-9_]/) ? false : true;
}
