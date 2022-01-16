/* graph
0 --- 3
| \
|  2
| / \
1     4
*/
const graph = [];
const vertices = 5;
// #region inital adjacency matrix set up
for(let i = 0; i < vertices; i++) {
    graph.push(new Array(vertices).fill(0));
}
graph[0][1] = 1;
graph[0][2] = 1;
graph[0][3] = 1;
graph[1][0] = 1;
graph[1][2] = 1;
graph[2][0] = 1;
graph[2][1] = 1;
graph[2][4] = 1;
graph[3][0] = 1;
graph[4][2] = 1;
// #endregion

const printResult = (vertices, visited) => {
    let allNodes = `All nodes: `;
    let visitedNodes = `Visited nodes: `;
    for(let i = 0; i < vertices; i++) {
        allNodes += `${i}, `;
        if(visited.get(i)) {
            visitedNodes += `${i}, `;
        }
    }
    console.log(allNodes.substring(0, allNodes.length - 2));
    console.log(visitedNodes.substring(0, visitedNodes.length - 2));
}

const bfs = (graph, vertices, node) => {
    const visited = new Map();
    for(let i = 0; i < vertices; i++) {
        visited.set(i, false);
    }
    const queue = [];
    queue.push(node);   // add to back
    while(queue.length !== 0) {
        const currentNode = queue.shift();  // get first element
        if(!visited.get(currentNode)) { // has not been visited
            visited.set(currentNode, true); // mark node as visited
            console.log(`Visiting node ${currentNode}`);
            graph[currentNode].forEach((elem, idx, arr) => {    // add node's unvisited neighbors
                if(elem === 1 && visited.get(idx) === false) {
                    queue.push(idx);
                }
            });
        }
    }
    printResult(vertices, visited);
}

console.table(graph);
bfs(graph, vertices, 0);