int arrayMaximalAdjacentDifference(std::vector<int> inputArray) {
    int max=0;
    for(int i=1;i<inputArray.size();i++){
        int difference=abs(inputArray[i-1]-inputArray[i]);
        if(difference>max) max=difference;
    }
    return max;
}