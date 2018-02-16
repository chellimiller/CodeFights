bool checkPalindrome(std::string inputString) {
        int j=inputString.size()-1;
        for(int i=0;i<inputString.size();i++){
              if(inputString[i]!=inputString[j]){
                     return false;
              }
              j--;
        }
        return true;
}
