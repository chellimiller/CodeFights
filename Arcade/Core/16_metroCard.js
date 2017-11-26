function metroCard(lastNumberOfDays) {
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var returnDays = [31];
    
    if (lastNumberOfDays == 31) {
        returnDays.unshift(30);
        returnDays.unshift(28);
    }
    
    return returnDays;
}
