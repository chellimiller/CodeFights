std::string lineEncoding(std::string s) {
    int count=0;
    char last=s[0];
    string result="";
    for(char c : s) {
        if(c==last) {
            count++;
        } else {
            if(count>1) {
                result+=to_string(count);
            }
            result.push_back(last);
            count=1;
            last=c;
        }
    }
    if(count>1) {
        result+=to_string(count);
    }
    result.push_back(last);
    return result;
}
