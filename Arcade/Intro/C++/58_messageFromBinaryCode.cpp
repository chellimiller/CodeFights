char byteToChar(string byte) {
    char sum=0;
    int p=0;
    for(int i=byte.size()-1;i>=0;i--) {
        if(byte[i]=='1') {
            sum+=pow(2, p);
        }
        p++;
    }
    return sum;
}

std::string messageFromBinaryCode(std::string code) {
    string result;
    for(int i=0;i<code.size();i+=8) {
        result.push_back(byteToChar(code.substr(i,8)));
    }
    return result;
}
