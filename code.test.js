const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());

// Define test cases
var TestGraph1 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
];

var TestGraph2 = [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
];

var TestGraph3 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0],
];

var TestGraph4 = [
    [0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 0, 1, 0]
];

var TestGraph5 = [
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0]
];

// Helper function to stringify the result for comparison
function stringifyResult(result) {
    return JSON.stringify(result);
}

// Test cases

//Graph 1
assert(stringifyResult(depthFirstSearch(TestGraph1, 0, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph1, 0, 2)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph1, 2, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph1, 1, 0)) !== JSON.stringify([]));

//Graph 2
assert(stringifyResult(depthFirstSearch(TestGraph2, 0, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph2, 2, 0)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph2, 0, 2)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph2, 1, 2)) === JSON.stringify([]));

//Graph3
assert(stringifyResult(depthFirstSearch(TestGraph3, 0, 2)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph3, 1, 2)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph3, 2, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph3, 0, 1)) !== JSON.stringify([]));

//Graph4
assert(stringifyResult(depthFirstSearch(TestGraph4, 0, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 2, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 2, 3)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 4, 0)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 5, 6)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 4, 6)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 0, 6)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 3, 1)) !== JSON.stringify([]));

//Graph5
assert(stringifyResult(depthFirstSearch(TestGraph5, 0, 1)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph5, 1, 3)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph5, 3, 4)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph5, 4, 0)) !== JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 5, 4)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 4, 2)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 1, 5)) === JSON.stringify([]));
assert(stringifyResult(depthFirstSearch(TestGraph4, 5, 3)) === JSON.stringify([]));

console.log("All tests passed.");

