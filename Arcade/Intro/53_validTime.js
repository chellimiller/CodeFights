function validTime(time) {
    // Divide $time into array
    var clock = time.split(":");
    // Set HH and MM to int values of clock
    var HH = parseInt(clock[0],10);
    var MM = parseInt(clock[1],10);
    // Check if HH and MM are in bounds
    if (HH > 23) {
        return false;
    } else if (MM > 59) {
        return false;
    } else if (HH < 0 || MM < 0) {
        return false;
    } else {
        return true;
    }
}