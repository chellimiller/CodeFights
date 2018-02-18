int sumUpNumbers(std::string inputString) {
    vector<int> nums;
    string temp;
    for(char c : inputString) {
        if(c>='0'&&c<='9') {
            temp.push_back(c);
        } else {
            if(temp.size()>0) {
                nums.push_back(atoi(temp.c_str()));
                temp="";
            }
        }
    }
    if(temp.size()>0) {
        nums.push_back(atoi(temp.c_str()));
        temp="";
    }
    int sum=0;
    for(int i : nums) sum+=i;
    return sum;
}
