std::vector<int> alternatingSums(std::vector<int> a) {
    vector<int> result(2,0);
    for(int i=0;i<a.size();i++){
        result[i%2]+=a[i];
    }
    return result;
}
