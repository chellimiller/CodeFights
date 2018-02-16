function sortByHeight(a) {
    var h = a.slice(0);
    h.sort(function(a,b){return a-b});
    while (h[0] === -1) {
        h.shift();
    }
    
    if (h.length === a.length) { return h; }
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            console.log(i);
            a[i] = h.shift();
        }
    } return a;
}
