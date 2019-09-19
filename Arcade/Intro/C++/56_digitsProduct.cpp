int digitsProduct(int product) {
    for(int i=1;i<=99999;i++) {
        int p=1;
        string s = to_string(i);
        for(char c : s) p*=(c-'0');
        if(p==product) return atoi(s.c_str());
    }
    return -1;
}
