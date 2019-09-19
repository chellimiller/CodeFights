function boxBlur(image) {
    var blur = [];
    
    var width = image[0].length;
    var height = image.length;
    
    for (i = 1; i < (height-1); i++) {
        var arr = [];
        for (j = 1; j < (width-1); j++) {
            var sum = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
                image[i][j-1] + image[i][j] + image[i][j+1] +
                image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
            arr.push(sum/9 - (sum/9 % 1));
        }
        blur.push(arr);
    }
    
    return blur;
}

