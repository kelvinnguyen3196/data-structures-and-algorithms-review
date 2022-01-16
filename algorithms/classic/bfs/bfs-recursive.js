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
for (let i = 0; i < vertices; i++) {
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
    for (let i = 0; i < vertices; i++) {
        allNodes += `${i}, `;
        if (visited.get(i)) {
            visitedNodes += `${i}, `;
        }
    }
    console.log(allNodes.substring(0, allNodes.length - 2));
    console.log(visitedNodes.substring(0, visitedNodes.length - 2));
}

const bfsRecursive = (graph, visited, queue) => {
    if (queue.length === 0) return;  // queue is empty, end of bfs
    const currentNode = queue.shift();
    if (!visited.get(currentNode)) {  // current node has already been visited
        visited.set(currentNode, true);
        console.log(`Visiting node ${currentNode}`);
        graph[currentNode].forEach((elem, idx) => {
            // if there is path and has not been visited
            if (elem === 1 && !visited.get(idx)) {
                queue.push(idx);
            }
        });
    }
    bfsRecursive(graph, visited, queue);
}

const visited = new Map();
for (let i = 0; i < vertices; i++) {
    visited.set(i, false);
}
const queue = [];
queue.push(0);  // start with node 0
console.table(graph);
bfsRecursive(graph, visited, queue);
printResult(vertices, visited);