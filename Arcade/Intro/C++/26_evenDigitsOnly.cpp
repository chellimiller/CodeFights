bool evenDigitsOnly(int n) {
    string s=to_string(n);
    for(char c:s){
        if((c-'0')%2!=0) return false;
    }
    return true;
}
