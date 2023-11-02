function depthFirstSearch(graph, startNode, targetNode) {
    const stack = [{ node: startNode, path: [startNode] }];
    const visit = new Set();

    while (stack.length > 0) {
        const { node, path } = stack.pop();

        if (node === targetNode) {
            return path; // Found the path
        }

        if (!visit.has(node)) {
            visit.add(node);

            for (const neighbor of graph[node]) {
                if (!visit.has(neighbor)) {
                    stack.push({ node: neighbor, path: path.concat(neighbor) });
                }
            }
        }
    }

    return []; // No path found
}


const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A'],
    D: ['B'],
};

const startNode = 'A';
const targetNode = 'D';

const result = depthFirstSearch(graph, startNode, targetNode);

console.log("Path found:", result);

/*
Sources Used:
https://www.programiz.com/dsa/graph-dfs
TA - I was confused about my test implementation and he helped me figue out the test case.
Referred to Ryan Zafft implementation 
*/
