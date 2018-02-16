bool areSimilar(std::vector<int> a, std::vector<int> b) {
    int errors=0;
    bool canFlip=false;
    int shouldBeA=0;
    int shouldBeB=0;
    for(int i=0;i<a.size();i++){
        if(a[i]!=b[i]){
            errors++;
            if(errors==1) {shouldBeA=b[i]; shouldBeB=a[i];}
            if(errors==2) canFlip = a[i]==shouldBeA && b[i]==shouldBeB;
        }
    }
    if(errors==2){
        return canFlip;
    } else {
        return errors==0;
    }
}
