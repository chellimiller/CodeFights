bool isIPv4Address(std::string inputString) {
    vector<string> temp;
    stringstream s(inputString);
    while(!s.eof()){
        temp.emplace_back();
        getline(s,temp.back(),'.');
    }
    if(temp.size()==4){
        for(string i:temp){
            for(char c:i){
                if(c<'0'||c>'9') return false;
            }
            int n=atoi(i.c_str());
            if(n<0 || n>255) return false;
            if(i=="") return false;
        }
        return true;
    }
    return false;
}
