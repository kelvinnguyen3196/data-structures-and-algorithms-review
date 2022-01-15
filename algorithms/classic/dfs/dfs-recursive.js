/* graph
0 --- 3
| \
|  2
| / \
1     4
*/
const graph = [];
let vertices = 5;
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

const dfs = (graph, visited, node) => {
    visited.set(node, true);
    console.log(`Visiting node ${node}`);
    for(let i = 0; i < graph[node].length; i++) {
        if(visited.get(i) === false && graph[node][i] === 1) {
            dfs(graph, visited, i);
        }
    }
}

const dfsRecursive = () => {
    const visited = new Map();
    for(let i = 0; i < vertices; i++) {
        visited.set(i, false);
    }
    dfs(graph, visited, 0);  // start on node 0
    printResult(vertices, visited);
}

console.table(graph);
dfsRecursive();

