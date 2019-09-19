bool isMAC48Address(std::string inputString) {
    if(inputString.size()!=17) return false;
    for(int i=0;i<inputString.size();i++) {
        char c=inputString[i];
        if((i+1)%3==0) {
            if(c!='-') return false;
        } else {
            if(!((c>='0'&&c<='9')||(c>='A'&&c<='F'))) return false;
        }
    }
    return true;
}
