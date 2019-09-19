function spiralNumbers(n) {
    // Start with creating a base spiral array
    if (n === 3 || n === 4) {
        return makeBase(n*n);
    } else {
        var matrix = makeBase(n*n);
    }
    // While the size of the matrix is too small, add layer
    while (matrix.length !== n) {
        matrix = addLayer(matrix, n*n);
    }
    // Return the matrix
    return matrix;
}
// Creating a base matrix
function makeBase(a) {
    var m = [];
    // For even sized matrix
    if (a % 2 === 0) {
        m.push([-15 + a, -14 + a, -13 + a, -12 + a])
        m.push([-4 + a, -3 + a, -2 + a, -11 + a])
        m.push([-5 + a, 0 + a, -1 + a, -10 + a])
        m.push([-6 + a, -7 + a, -8 + a, -9 + a])
    }
	// For odd sized matrix
	else {
        m.push([-8 + a, -7 + a, -6 + a]);
        m.push([-1 + a, 0 + a, -5 + a]);
        m.push([-2 + a, -3 + a, -4 + a]);
    }
    // Return base matrix
    return m;
}
// Add a layer to the matrix
function addLayer(m,a) {
    var cDown = m[0][0] - a - 1;
    var cUp = cDown - (m.length * 3) - 1;
    var topRow = [a + cUp - 1];
    var botRow = [a + cDown - m.length];
    // Adding the outsides
    for (var i = 0; i < m.length; i++) {
        topRow.unshift(topRow[0] - 1);
        botRow.push(botRow[0] - 1 - i);
        m[i].unshift(cDown + a);
        m[i].push(cUp + a);
        cDown--;
        cUp++;
    }
    // Addint top and bottom row
    topRow.unshift(topRow[0] - 1);
    botRow.push(botRow[0] - 1 - i);
    m.unshift(topRow);
    m.push(botRow);
    // Returning updated matrix
    return m;
}