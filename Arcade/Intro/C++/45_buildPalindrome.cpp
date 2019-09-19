bool checkPalindrome(string st) {
    for(int i=0;i<st.size();i++) {
        int j=st.size()-(i+1);
        if(st[i]!=st[j]) return false;
        if(i>=j) return true;
    }
    return true;
}

std::string buildPalindrome(std::string st) {
    string pool=st;
    string result="";
    while(true) {
        string temp=st;
        for(int i=pool.size()-1;i>=0;i--) {
            temp.push_back(pool[i]);
        }
        if(checkPalindrome(temp)) {
            result=temp;
        }
        if(pool.size()>0) {
            pool.pop_back();
        } else break;
    }
    return result;
}
