function commonCharacterCount(s1, s2) {
    var a1 = s1.split('').sort();
    var a2 = s2.split('').sort();
    var c = 0;
    
    while (a1[0] != null && a2[0] != null) {
        if (a1[0] == a2[0]) {
            a1.shift();
            a2.shift();
            c++;
        } else if (a1[0] > a2[0]) {
            a2.shift();
        } else {
            a1.shift();
        }
    }
    
    return c;
}
