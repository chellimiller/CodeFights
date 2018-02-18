std::vector<std::string> fileNaming(std::vector<std::string> names) {
    map<string, int> count;
    vector<string> result;
    for(string s : names) {
        string temp=s;
        if(count[s]>0) {
            int i=count[s]-1;
            do {
                i++;
                temp=s;
                temp+="("+to_string(i)+")";
            } while(count[temp]>0);
            count[temp]++;
        }
        count[s]++;
        result.push_back(temp);
    }
    return result;
}
