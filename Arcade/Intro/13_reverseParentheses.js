function reverseParentheses(s) {
    while (s.indexOf('(') !== -1) {
        s = s.slice(0,s.indexOf('(')) + reverse(s.substring(s.indexOf('(') + 1));
    } return s;
}

function reverse(str) {
    while (str.indexOf('(') !== -1 && str.indexOf('(') < str.indexOf(')')) {
        str = str.slice(0,str.indexOf('(')) + 
            reverse(str.substring(str.indexOf('(') + 1));
    }
    return str.slice(0,str.indexOf(')')).split('').reverse().join('') + 
        str.slice(str.indexOf(')')+1);
}