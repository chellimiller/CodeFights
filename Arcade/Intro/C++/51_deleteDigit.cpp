int deleteDigit(int n) {
    int max=INT_MIN;
    string sn = to_string(n);
    for(int i=0;i<sn.size();i++) {
        string temp="";
        for(int j=0;j<sn.size();j++) {
            if(i!=j) temp.push_back(sn[j]);
        }
        int test=atoi(temp.c_str());
        if(test>max) max=test;
    }
    return max;
}
