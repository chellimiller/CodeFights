bool areEquallyStrong(int yourLeft, int yourRight, int friendsLeft, int friendsRight) {
    int yourMin=min(yourLeft,yourRight);
    int yourMax=max(yourLeft,yourRight);
    int friendsMin=min(friendsLeft,friendsRight);
    int friendsMax=max(friendsLeft,friendsRight);
    return yourMax==friendsMax && yourMin==friendsMin;
}