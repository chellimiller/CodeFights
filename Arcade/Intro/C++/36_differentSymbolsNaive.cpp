int differentSymbolsNaive(std::string s) {
    map<char, bool> m;
    for(char c : s){
        m[c]=true;
    }
    int count=0;
    for(auto iter=m.begin();iter!=m.end();iter++) {
        count++;
    }
    return count;
}
