int makeArrayConsecutive2(std::vector<int> statues) {
    sort(statues.begin(),statues.end());
    int total=0;
    for(int i=0;i<statues.size()-1;i++){
        total+=(statues[i+1]-statues[i])-1;
    }
    return total;
}
