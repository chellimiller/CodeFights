function differentSymbolsNaive(s) {
    s = s.replace(new RegExp(s.charAt(0), 'g'),"");
    return s.length > 0 ? 1 + differentSymbolsNaive(s) : 1;
}
