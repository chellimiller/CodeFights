int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
    int sum=upSpeed;
    int delta=upSpeed-downSpeed;
    for(int i=1;true;i++) {
        if(sum>=desiredHeight) return i;
        sum+=delta;
    }
}
