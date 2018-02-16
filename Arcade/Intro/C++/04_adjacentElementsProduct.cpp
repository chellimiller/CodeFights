int adjacentElementsProduct(std::vector<int> inputArray) {
    int highest=INT_MIN;
        for(int i=0;i<inputArray.size()-1;i++){
                int test=inputArray[i]*inputArray[i+1];
                if(test>highest) highest = test;
        }
        return highest;
}
