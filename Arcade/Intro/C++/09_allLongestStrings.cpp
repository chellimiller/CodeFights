std::vector<std::string> allLongestStrings(std::vector<std::string> inputArray) {
    int longestString=0;
    vector<string> result;
        for(string i : inputArray){
                if(i.length()>longestString){
                        result.clear();
                        longestString=i.length();
                        result.emplace_back(i);
                } else if(i.length()==longestString){
                        result.emplace_back(i);
                
                }
        }
        return result;
}
