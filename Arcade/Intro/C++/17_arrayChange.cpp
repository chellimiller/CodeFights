int arrayChange(std::vector<int> inputArray) {
    int result=0;
    for(int i=1;i<inputArray.size();i++){
        int min=inputArray[i-1]+1;
        if(min>inputArray[i]){
        result+=min-inputArray[i];
        inputArray[i]=min;
        }
    }
    return result;
}
