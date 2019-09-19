bool isLetter(char c) {
    return (c>='a'&&c<='z')||(c>='A'&&c<='Z');
}

std::string longestWord(std::string text) {
    int max=INT_MIN;
    int count = 0;
    bool lastCharIsLetter=false;
    int start=0;
    int currentStart=0;
    int end=0;
    for(int i=0;i<text.size();i++) {
        char c = text[i];
        if(isLetter(c)) {
            if(!lastCharIsLetter) {
                currentStart=i;
                lastCharIsLetter=true;
            }
            count++;
        } else {
            if(count>max) {
                max=count;
                end=i;
                start=currentStart;
            }
            count=0;
            lastCharIsLetter=false;
        }
    }
    if(end==0) end=text.size();
    return text.substr(start, (end-start));
}
