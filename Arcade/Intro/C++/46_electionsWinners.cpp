int electionsWinners(std::vector<int> votes, int k) {
    int max=INT_MIN;
    int numberOfMax=0;
    for(int candidate : votes) {
        if(candidate>max) max=candidate;
    }
    int count=0;
    for(int candidate : votes) {
        if(candidate==max) numberOfMax++;
        else if(candidate+k>max) count++;
    }
    if(k==0 && numberOfMax>1) return 0; 
    return numberOfMax+count;
}
