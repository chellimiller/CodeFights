function fileNaming(names) {
    var renamed = [];
    var copies = [];
    
    var goodName = function (file) {
        var x = renamed.indexOf(file);
        if (x < 0) {
            return file;
        } else {
            while (renamed.indexOf(file + "(" + (copies[x]+1) + ")") >= 0) {
                copies[x]++;
            } return file + "(" + (copies[x]+1) + ")";
        }
    }
    for (var i = 0; i < names.length; i++) {
        var n = goodName(names[i]);
        renamed.push(n);
        copies.push(0);
    }
    
    return renamed;
}