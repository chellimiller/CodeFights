// This is the same as Intro exercise 39
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    } else if (weight1 > maxW) {
        return weight2 > maxW ? 0 : value2;
    } else if (weight2 > maxW) {
        return weight1 > maxW ? 0 : value1;
    }
    return value1 > value2 ? value1 : value2;
}
