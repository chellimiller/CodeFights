std::string alphabeticShift(std::string inputString) {
    for(char &c:inputString){
        c++;
        if(c>'z') c='a';
    }
    return inputString;
}
