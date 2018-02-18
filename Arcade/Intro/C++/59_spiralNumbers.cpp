enum Direction {RIGHT, DOWN, LEFT, UP};

int top=-1;
int right=-1;
int bottom=-1;
int left=-1;

bool checkPos(vector<vector<int>> &matrix, int x, int y, Direction d) {
    int nx=x;
    int ny=y;
    if(d==RIGHT) {
        nx++;
    } else if(d==DOWN) {
        ny++;
    } else if(d==LEFT) {
        nx--;
    } else {
        ny--;
    }
    if(nx>=matrix[0].size()||nx<0||ny>=matrix.size()||ny<0) return false;
    if(ny==top||nx==left||ny==matrix.size()-(bottom+1)||nx==matrix[0].size()-(right+1)) return false;
    return true;
}

std::vector<std::vector<int>> spiralNumbers(int n) {

    
    int x=0;
    int y=0;
    Direction d=RIGHT;
    
    int c=0;
    
    vector<vector<int>> result(n, vector<int>(n, 0));
    
    bool flag=true;
    while(flag) {
        c++;
        result[y][x]=c;
        if(!checkPos(result,x,y,d)) {
            for(int i=0;i<4;i++) {
                if(d==RIGHT) {
                    d=DOWN;
                    top++;
                } else if(d==DOWN) {
                    d=LEFT;
                    right++;
                } else if(d==LEFT) {
                    d=UP;
                    bottom++;
                } else {
                    d=RIGHT;
                    left++;
                }
                if(checkPos(result,x,y,d)) break;
                if(i==3) flag=false;
            }
            
        }
        if(d==RIGHT) {
            x++;
        } else if(d==DOWN) {
            y++;
        } else if(d==LEFT) {
            x--;
        } else {
            y--;
        }
    }
    return result;
}
