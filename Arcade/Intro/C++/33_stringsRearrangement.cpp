bool flag = false;

bool testCombination(vector<string> set) {
    for(int i=1;i<set.size();i++){
        int errors=0;
        for(int j=0;j<set[0].size();j++){
            if(set[i-1][j]!=set[i][j]) errors++;
            if(errors>1) return false;
        }
        if(errors==0) return false;
    }
    return true;
}

void testAllCombinations(vector<string> orderedSet, vector<string> unassignedElements) {
    if(!flag)
    if(unassignedElements.size()>0) {
        for(int i=0;i<unassignedElements.size();i++) { //Chooses what element will be added into the orderedSet
            vector<string> temp;
            temp.empty();
            for(int j=0;j<unassignedElements.size();j++) { //Constructs a new unassignedElements array
                if(j!=i) temp.push_back(unassignedElements[j]);
            }
            orderedSet.push_back(unassignedElements[i]);
            testAllCombinations(orderedSet,temp);
            orderedSet.pop_back();
        }
    } else {
        if(testCombination(orderedSet)) flag=true;
    }
}

bool stringsRearrangement(std::vector<std::string> inputArray) {
   vector<string> empty;
    testAllCombinations(empty, inputArray);
    return flag;
}
