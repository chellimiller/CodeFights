bool c(int x, int y) {
    return x>=0&&x<=7&&y>=0&&y<=7;
}

int chessKnight(std::string cell) {
    int sum=0;
    int x=cell[0]-'a';
    int y=cell[1]-'1';
    sum+=(int)c(x-2,y+1);
    sum+=(int)c(x-2,y-1);
    sum+=(int)c(x-1,y+2);
    sum+=(int)c(x+1,y+2);
    sum+=(int)c(x+2,y+1);
    sum+=(int)c(x+2,y-1);
    sum+=(int)c(x+1,y-2);
    sum+=(int)c(x-1,y-2);
    return sum;
}
