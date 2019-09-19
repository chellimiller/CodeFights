int knapsackLight(int value1, int weight1, int value2, int weight2, int maxW) {
    if(weight1+weight2>maxW) {
        if(value1/weight1>value2/weight2) {
            if(weight1<=maxW) return value1;
            else return 0;
        } else {
            if(weight2<=maxW) return value2;
            else return 0;
        }
    } else return value1+value2;
}
