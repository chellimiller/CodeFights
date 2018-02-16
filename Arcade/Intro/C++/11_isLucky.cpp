bool isLucky(int n) {
 string temp = to_string(n);
 int sum1=0;
 int sum2=0;
  for(int i=0;i<temp.length()/2;i++){
    sum1+=temp[i]-'0';
    sum2+=temp[i+(temp.length()/2)]-'0';
  }
  return sum1==sum2;
}
