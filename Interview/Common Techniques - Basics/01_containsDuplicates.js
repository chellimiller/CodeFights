function containsDuplicates(a) {
    a.sort();
    for (var i = 1; i < a.length; i++) {
        if (a[i] === a[i-1]) {
            return true;
        }
    }
    return false;
}
