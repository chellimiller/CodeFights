function almostIncreasingSequence(sequence) {
    if (sequence.length === 2) {return true;}
    
    var remove = 0, 
        i = 0;
    
    while (remove < 2 && i < sequence.length - 1) {
        
        if (sequence[i] < sequence[i + 1]) {
        } else if (i === 0 && sequence[i] > sequence[i+2]) {
            remove++;
        } else if (i === sequence.length - 2) {
            remove++;
        } else if (i > 0 && sequence[i-1] < sequence[i+1] ) {
            remove++;
        } else if (i < sequence.length - 2 && sequence[i] < sequence[i+2] ) {
            remove++;
        }  else if (i > 1 && sequence[i] < sequence[i-2] ) {
            remove++;
        } else {return false;}
        
        i++;
    } 
    
    return remove > 1 ? false : true;
}
