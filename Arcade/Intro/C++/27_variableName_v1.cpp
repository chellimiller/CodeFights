bool variableName(std::string name) {
    if(name[0]>='0' && name[0]<='9') return false;
    for(char c:name){
        if(!(((c>='a'&&c<='z')||(c>='A'&&c<='Z'))||(c>='0'&&c<='9')||(c=='_'))) return false;
    }
           return true;
}
