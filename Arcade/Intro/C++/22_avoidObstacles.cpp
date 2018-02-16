int avoidObstacles(std::vector<int> inputArray) {
    int jump=1;
    for(int i=0;i<inputArray.size();i++){
        if(inputArray[i]%jump==0){
            jump++;
            i=-1;
        }
    }
    return jump;
}

