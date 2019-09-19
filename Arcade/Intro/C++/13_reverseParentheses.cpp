void flipStr(string &s, int left, int right){
    while(left<right){
        char temp=s[left];
        s[left]=s[right];
        s[right]=temp;
        left++;
        right--;
    }
}

void reverseString(string &s, int left, int right){
    int count=0;
    int l=left;
    for(int i=left+1;i<right;i++){
        if(s[i]=='(') {
           if(count==0){
               l=i;
           }
            count++;
        } else if(s[i]==')'){
            count--;
            if(count==0){
                reverseString(s,l,i);
            }
        }
    }
    flipStr(s,left,right);
}

std::string reverseParentheses(std::string s) {
    bool hasParen=false;
    int count=0;
    int left=0;
    for(int i=0;i<s.length();i++){
        if(s[i]=='('){
            hasParen=true;
           if(count==0){
               left=i;
           }
            count++;
            
        } else if(s[i]==')'){
            count--;
            if(count==0) {
                reverseString(s,left,i);
            }
        }
    }
    if(hasParen){
        string result;
        for(int i=0;i<s.length();i++){
            if(s[i]!='(' && s[i]!=')') result+=s[i];
        }
        return result;
    } else return s;
}
