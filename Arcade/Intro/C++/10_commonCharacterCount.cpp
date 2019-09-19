int commonCharacterCount(std::string s1, std::string s2) {
    map<char, int> first;
    map<char, int> second;
        for(char c : s1) first[c]++;
        for(char c : s2) second[c]++;
    int sum=0;
        for(map<char, int>::iterator f=first.begin();f!=first.end();f++){
                sum+=min(first[f->first], second[f->first]);
        }
    return sum;
}
