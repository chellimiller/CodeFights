std::vector<int> sortByHeight(std::vector<int> a) {
    vector<int> temp;
    for(int i:a) {
        if(i!=-1) temp.push_back(i);
    }
    sort(temp.begin(),temp.end());
    int j=0;
        for(int i=0;i<a.size();i++){
            if(a[i]!=-1) {
                a[i]=temp[j];
                j++;
                if(j>=temp.size()) break;
            }
        }
    return a;
}
