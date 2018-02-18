int differentSquares(std::vector<std::vector<int>> matrix) {
    if(matrix.size()<2) return 0;
    if(matrix[0].size()<2) return 0;
    map<vector<vector<int>>, bool> exists;
    for(int r=0;r<matrix.size()-1;r++) {
        for(int c=0;c<matrix[0].size()-1;c++) {
            vector<vector<int>> temp;
            for(int i=r;i<r+2;i++) {
                temp.emplace_back();
                for(int j=c;j<c+2;j++) {
                    temp[temp.size()-1].push_back(matrix[i][j]);
                }
            }
            if(!exists[temp]) exists[temp]=true;
        }
    }
    return exists.size();
}
