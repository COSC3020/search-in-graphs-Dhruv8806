[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12514896&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.

## My analysis 

My implementation first initializes a stack to track nodes to explore and a set called "visit" to mark nodes as visited. Inside the while loop, the algorithm pops elements from the stack, checks if the popped node is the targetnode, and returns the path if found. If not, it marks and explores unvisited neighbors, pushing them onto the stack. If the loop completes without finding a path to the target node, the function returns an empty array to indicate that no path was found. The overall worst-case time complexity is $\Theta$ $\(|V| + |E|) $, where $V$ is the number of vertices and $E$ is the number of edges in the graph. 
