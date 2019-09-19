function isLucky(n) {
    var arr = n.toString().split('');
    var top = 0, bot = 0, len = arr.length;
    for (var i = 0; i < len/2; i++) {
        bot += parseInt(arr[i], 10);
        top += parseInt(arr[len-i-1], 10);
    } return (bot === top);
}