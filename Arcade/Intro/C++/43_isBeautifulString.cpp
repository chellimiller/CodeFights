bool isBeautifulString(std::string inputString) {
    map<char, int> count;
    for(char c : inputString) {
        count[c]++;
    }
    for(char c='b';c<='z';c++) {
        if(count[c-1]<count[c]) return false;
    }
    return true;
}
