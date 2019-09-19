function buildPalindrome(st) {
    if (isPal(st)) { return st; }
    
    var rev = st.split("").reverse().join(""),
        tmp = st.charAt(0);
    for (var i = 1; i < st.length; i++) {
        if (isPal(tmp + rev)) {
            return tmp + rev;
        }
        tmp += st.charAt(i);
    }
    return  tmp + rev;
}

function isPal(s) {
    return s === s.split("").reverse().join("");
}