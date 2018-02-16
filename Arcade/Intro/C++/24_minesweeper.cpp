std::vector<std::vector<int>> minesweeper(std::vector<std::vector<bool>> matrix) {
    vector<vector<int>> result(matrix.size(),vector<int>(matrix[0].size(), 0));
    for(int i=0;i<matrix.size();i++){
        for(int j=0;j<matrix[0].size();j++){
            bool t=i>0;
            bool r=j<matrix[0].size()-1;
            bool b=i<matrix.size()-1;
            bool l=j>0;
            int sum=0;
            if(t && matrix[i-1][j]) sum++;
            if(t&&r&&matrix[i-1][j+1]) sum++;
            if(r&&matrix[i][j+1]) sum++;
            if(b&&r&&matrix[i+1][j+1]) sum++;
            if(b&&matrix[i+1][j]) sum++;
            if(b&&l&&matrix[i+1][j-1]) sum++;
            if(l&&matrix[i][j-1]) sum++;
            if(l&&t&&matrix[i-1][j-1]) sum++;
            
            result[i][j]=sum;
        }
    }
    return result;
}
