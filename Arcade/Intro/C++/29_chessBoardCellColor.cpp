bool chessBoardCellColor(std::string cell1, std::string cell2) {
    int onex=cell1[0]-'A'+1;
    int oney=cell1[1]-'0';
    bool oneD=onex%2==oney%2;
    
    int twox=cell2[0]-'A'+1;
    int twoy=cell2[1]-'0';
    bool twoD=twox%2==twoy%2;
    
    return oneD==twoD;
}

