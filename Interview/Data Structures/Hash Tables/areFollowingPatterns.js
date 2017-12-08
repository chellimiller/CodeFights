function areFollowingPatterns(strings, patterns) {
    // Create two associative arrays
    var str = [],
        pat = [];
    // Loop through patterns (or strings, doesn't matter)
    for (let i in patterns) {
        // If pattern was already found
        if (pat[patterns[i]]) {
            // If the pattern doesn't match, return false
            if (pat[patterns[i]] !== strings[i]) {
                return false;
            }
        } else if (str[strings[i]]) {
            // If pattern wasn't logged but string was, return false
            return false;
        } else {
            // New pattern/string, add to respective arrays
            pat[patterns[i]] = strings[i];
            str[strings[i]] = patterns[i];
        }
    }
    // Everything works, return true
    return true;
}
