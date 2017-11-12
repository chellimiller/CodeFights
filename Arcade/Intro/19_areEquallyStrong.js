function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    
    if (yourLeft+yourRight !== friendsLeft+friendsRight) { return false; }
    
    var you = [yourLeft, yourRight], friend = [friendsLeft, friendsRight];
    you.sort(); friend.sort();
    
    return (you[0] === friend[0]);
}
