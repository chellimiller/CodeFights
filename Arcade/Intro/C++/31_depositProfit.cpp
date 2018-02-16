int depositProfit(int deposit, int rate, int threshold) {
    float current=deposit;
    int result=0;
    while(current<threshold){
        result++;
        current+=current*(rate/100.0f);
    }
    return result;
}


