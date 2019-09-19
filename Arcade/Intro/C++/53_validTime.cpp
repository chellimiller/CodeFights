bool validTime(std::string time) {
    int hour = atoi(time.substr(0,2).c_str());
    int minute = atoi(time.substr(3, 2).c_str());
    return hour>=0&&hour<=23&&minute>=0&&minute<=59;
}
