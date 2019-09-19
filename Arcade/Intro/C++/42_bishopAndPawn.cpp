bool bishopAndPawn(std::string bishop, std::string pawn) {
    int sbx=bishop[0]-'a';
    int sby=bishop[1]-'0';
    int px=pawn[0]-'a';
    int py=pawn[1]-'0';
    
    int bx=sbx;
    int by=sby;
    while(bx>=0 && by<=7){
        bx--;
        by++;
        if(bx==px && by==py) return true;
    }
    bx=sbx;
    by=sby;
    while(bx<=7 && by<=7){
        bx++;
        by++;
        if(bx==px && by==py) return true;
    }
    bx=sbx;
    by=sby;
    while(bx<=7 && by>=0){
        bx++;
        by--;
        if(bx==px && by==py) return true;
    }
    bx=sbx;
    by=sby;
    while(bx>=0 && by>=0){
        bx--;
        by--;
        if(bx==px && by==py) return true;
    }
    return false;
}
