//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverseTree(t) {
    let array = [];
    let queue = [];
    queue.push(t);
    
    while (queue.length !== 0) {
        let current = queue.shift();
        if (current !== null) {
            array.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        } else {
            return array;
        }
    }
    
    return array;
}



//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
    let array = [];
    let map = [];
    var row = 0;
    map.push([t]);
    
    while (true) {
        let next_row = [];
        let row_max = null;
        for (let i in map[row]) {
            let current = map[row][i];
            if (current !== null) {
                if (row_max === null || current.value > row_max) {
                    row_max = current.value;
                }
                if (current.left) {
                    next_row.push(current.left);
                }
                if (current.right) {
                    next_row.push(current.right);
                }
            }
        }
        if (row_max) {
            array.push(row_max);
        }
        
        if (next_row.length > 0) {
            map.push(next_row);
            row++;
        } else {
            return array;
        }
    }
}


//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
    let sum = 0;
    let queue = [];
    queue.push(t);
    
    while (queue.length !== 0) {
        let current = queue.shift();
        if (current !== null) {
            if (current.left) {
                current.left.value += current.value * 10;
                queue.push(current.left);
            }
            if (current.right) {
                current.right.value += current.value * 10;
                queue.push(current.right);
            }
            if (current.right === null && current.left === null) {
                sum += current.value;
            }
        }
    }
    return sum;
}


function longestPath(fileSystem) {
    
    if (fileSystem.indexOf(".") === -1) {
        return 0;
    } else if (fileSystem.indexOf("\f") === -1) {
        return fileSystem.length;
    }
    
    fileSystem = fileSystem.replace(/    /g, "\t");
    let paths = fileSystem.split("\f");
    let max_len = 0;
    
    let parent = "";
    let prev_depth = 0;
    let prev_path = paths.shift();
    
    for (let i in paths) {
        let this_depth = 0;
        while (paths[i].startsWith("\t")) {
            paths[i] = paths[i].replace("\t","");
            this_depth++;
        }
        
        if (this_depth !== prev_depth) {
            
            if (this_depth < prev_depth) {
                
                let p_arr = parent.split("/");
                while (prev_depth !== this_depth) {
                    p_arr.pop();
                    prev_depth--;
                }
                parent = p_arr.join("/");
                
            } else {
                parent = prev_path
                prev_depth = this_depth;
            }
            
            
        }
        
        
        prev_path = parent !== "" ? parent + "/" + paths[i] : paths[i];
        
        if (prev_path.indexOf(".") > 0 && prev_path.length > max_len) {
            max_len = prev_path.length;
            console.log(prev_path);
        }
    }
    
    return max_len;
}
