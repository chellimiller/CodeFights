function makeArrayConsecutive2(statues) {
    var len = statues.length;
    statues.sort(function(a, b){return a-b});
    var range = statues[len-1] - statues[0];
    return range > len ? range - len + 1 : 0;
}
