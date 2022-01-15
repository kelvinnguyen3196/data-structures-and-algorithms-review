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
const Stack = require('../../../data-structures/stack.js');
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

const stack = require('../../../data-structures/stack.js');
const dfs = (graph, vertices, node) => {
    const stack = new Stack();
    const visited = new Map();
    stack.push(node);   // push first node
    while(!stack.isEmpty()) {
        const currentNode = stack.pop();
        if(!visited.has(currentNode)) { // if currentNode has not be visited
            console.log(`Visiting node ${currentNode}`);
            visited.set(currentNode, true);    // mark node as visited
            graph[currentNode].forEach((elem, idx) => {
                // if there is an edge and node hasn't been visited
                if(!visited.has(idx) && elem === 1) {
                    stack.push(idx);
                }
            });
        }
    }
    printResult(vertices, visited);
}

console.table(graph);
dfs(graph, vertices, 0);