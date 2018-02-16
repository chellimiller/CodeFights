char firstDigit(std::string inputString) {
    for(char c : inputString){
        if(c>='0'&&c<='9') return c;
    }
}