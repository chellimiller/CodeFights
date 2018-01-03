function lineUp(commands) {
    var halfTimes = 0,
        times = 0;
    
    for (var i = 0; i < commands.length; i ++) {
        if (commands[i] == 'L' || commands[i] == 'R') {
            halfTimes++;
        } else if (halfTimes % 2 == 0) {
            times++;
        }
    }
    
    return parseInt(halfTimes/2) + times;
}
