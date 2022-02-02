// problem: implement breadth first search
// notes
    // bfs uses a queue
    // focuses on exploring each node in each level before moving to next level

const vertices = 7;
const graph = [];
for(let i = 0; i < vertices; i++) {
    graph.push(new Array(vertices).fill(0));
}
graph[0][1] = 1;
graph[0][2] = 1;
graph[0][3] = 1;
graph[1][0] = 1;
graph[1][4] = 1;
graph[2][0] = 1;
graph[2][4] = 1;
graph[3][0] = 1;
graph[3][5] = 1;
graph[3][6] = 1;
graph[4][1] = 1;
graph[4][2] = 1;
graph[4][6] = 1;
graph[5][3] = 1;
graph[6][3] = 1;
graph[6][4] = 1;
/*
0--1--4
| \  / \
3   2  /
| \  /
5   6
*/

const printResults = (vertices, visited) => {
    let allNodes = `All nodes: \t`;
    let visitedNodes = `Visited nodes: \t`;
    for(let i = 0; i < vertices; i++) {
        allNodes += `${i}, `;
        if(visited.get(i) === true) {  // node was visited
            visitedNodes += `${i}, `;
        }
    }
    allNodes = allNodes.substring(0, allNodes.length - 2);
    visitedNodes = visitedNodes.substring(0, visitedNodes.length - 2);
    console.log(allNodes);
    console.log(visitedNodes);
}

const bfsIterative = (graph) => {
    const visited = new Map();
    for(let i = 0; i < vertices; i++) {
        visited.set(i, false);  // set all node to unvisited
    }
    const queue = [];
    queue.push(0);  // starting node
    while(queue.length !== 0) {
        const currNode = queue.shift();
        if(visited.get(currNode) === true) continue;   // if node has already been visited skip
        // console.log(`Visiting node ${currNode}...`);
        visited.set(currNode, true);   // mark node as visited
        // console.log(visited);
        graph[currNode].forEach((path, node) => {
            if(path && visited.get(node) === false) {   // if there is path and unvisited
                // console.log(`\tPushed node ${node}`);
                queue.push(node);
            }
        });
        // console.log(queue);
    }
    printResults(vertices, visited);
}

bfsIterative(graph);