int digitDegree(int n) {
    if(n<10) return 0;
    string temp=to_string(n);
    int sum=0;
    for(char c : temp){
        sum+=c-'0';
    }
    return digitDegree(sum)+1;
}
