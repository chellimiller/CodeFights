int absoluteValuesSumMinimization(std::vector<int> a) {
     int smallestA=0;
     int smallestSum=INT_MAX;
    for(int i=0;i<a.size();i++){
        int sum=0;
   
    
        for(int j=0;j<a.size();j++){
            sum+=abs(a[j]-a[i]);
        }
        if(sum<smallestSum){
            smallestSum=sum;
            smallestA=a[i];
        }
    }
    return smallestA;
}

