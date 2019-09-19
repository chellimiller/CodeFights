std::string longestDigitsPrefix(std::string inputString) {
    string temp;
    for(char c : inputString) {
        if(c>='0'&&c<='9')
            temp.push_back(c);
        else return temp;
    }
}
