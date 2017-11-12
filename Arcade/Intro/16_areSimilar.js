function areSimilar(a, b) {
    
    var firstIndex = -1, 
        diff = 0;
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            
            if (diff === 2) { return false; }
            diff++;
            
            if (firstIndex === -1) {
                firstIndex = i;
            } else if (a[firstIndex] !== b[i] || b[firstIndex] !== a[i]) {
                return false;
            }
        }
    } return true;
}