function addBorder(picture) {
    
    for (var i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    
    picture.unshift("*".repeat(picture[0].length));
    picture.push("*".repeat(picture[0].length));
    
    return picture;
}
