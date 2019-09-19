std::vector<std::string> addBorder(std::vector<std::string> picture) {
string topBottom;
    topBottom.assign(picture[0].length()+2,'*');
    for(string &s : picture){
        s="*"+s+"*";
    }
    picture.insert(picture.begin(),topBottom);
    picture.push_back(topBottom);
    return picture;
}
