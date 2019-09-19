bool almostIncreasingSequence(std::vector<int> sequence) {
    int removeIndex=0;
    for(;removeIndex<sequence.size()-1;removeIndex++){
        if(sequence[removeIndex]>=sequence[removeIndex+1]) {
            if(removeIndex>=1 && removeIndex<sequence.size()-1 && sequence[removeIndex-1]>=sequence[removeIndex+1]) {
                removeIndex++;
                if(removeIndex>=1 && removeIndex<sequence.size()-1 && sequence[removeIndex-1]>=sequence[removeIndex+1]) return false;
            }
            break;
        }
        if(removeIndex==sequence.size()-1) return true;
    }
    removeIndex++;
    for(;removeIndex<sequence.size()-1;removeIndex++){
            if(sequence[removeIndex]>=sequence[removeIndex+1]) return false;
    }
    return true;
}
