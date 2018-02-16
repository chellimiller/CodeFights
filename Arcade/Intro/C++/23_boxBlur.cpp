std::vector<std::vector<int>> boxBlur(std::vector<std::vector<int>> image) {
    vector<vector<int>> result(image.size()-2, vector<int>(image[0].size()-2,0));
    for(int i=1;i<image.size()-1;i++){
        for(int j=1;j<image[0].size()-1;j++){
            int sum=image[i-1][j]+image[i-1][j+1]+image[i][j+1]+image[i+1][j+1]+image[i+1][j]+image[i+1][j-1]+image[i][j-1]+image[i-1][j-1]+image[i][j];
            result[i-1][j-1]=sum/9;
            
        }
    }
    return result;
}
