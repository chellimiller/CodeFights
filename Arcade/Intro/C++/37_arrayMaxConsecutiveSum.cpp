int arrayMaxConsecutiveSum(std::vector<int> inputArray, int k) {
    int sum = 0;
    for(int i=0;i<k;i++){
        sum+=inputArray[i];
    }
    int max = sum;
    for(int i=1;i<=inputArray.size()-k;i++){
        sum-=inputArray[i-1];
        sum+=inputArray[(i+k)-1];
        if(sum>max) max=sum;
    }
    return max;
}
