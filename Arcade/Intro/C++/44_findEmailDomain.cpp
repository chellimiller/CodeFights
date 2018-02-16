std::string findEmailDomain(std::string address) {
    int index=address.size()-1;
    for(;index>=0;index--) {
        if(address[index]=='@') break;
    }
    return address.substr(index+1,(address.size()-1)-index);
}
