bool palindromeRearranging(std::string inputString) {
    map<char, int> count;
    bool isOdd=false;
    for(char c:inputString){
        count[c]++;
    }
    for(auto i=count.begin();i!=count.end();i++){
        if(i->second%2!=0) {
            if(!isOdd){
                isOdd=true;
            } else return false;
        }
    }
    return true;
}
