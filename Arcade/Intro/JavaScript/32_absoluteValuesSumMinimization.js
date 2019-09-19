function absoluteValuesSumMinimization(a) {
    var low  = Math.floor((a.length - 1) / 2),
        high = Math.ceil((a.length - 1) / 2);
    var lowTest  = 0,
        highTest = 0;
    for (let i in a) {
        lowTest  += Math.abs(a[i] - a[low]);
        highTest += Math.abs(a[i] - a[high]);
    }
    return highTest >= lowTest ? a[low] : a[high];
}

