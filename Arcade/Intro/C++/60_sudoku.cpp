bool sudoku(std::vector<std::vector<int>> grid) {
    map<int, int> colCount;
    for(int c=0;c<grid[0].size();c++) {
        colCount=map<int, int>();
        for(int r=0;r<grid.size();r++) {
            colCount[grid[r][c]]++;
            if(colCount[grid[r][c]]>1)   return false;
        }
    }
    map<int, int> rowCount;
    for(int r=0;r<grid.size();r++) {
        rowCount=map<int, int>();
        for(int c=0;c<grid[0].size();c++) {
            rowCount[grid[r][c]]++;
            if(rowCount[grid[r][c]]>1)    return false;
        }
    }
    for(int r=0;r<grid.size();r+=3) {
        for(int c=0;c<grid[0].size();c+=3) {
            map<int, int> subCount;
            for(int i=0;i<3;i++) {
                for(int j=0;j<3;j++) {
                    subCount[grid[r+i][c+j]]++;
                    if(subCount[grid[r+i][c+j]]>1) return false;
                }
            }
        }
    }
    return true;
}
