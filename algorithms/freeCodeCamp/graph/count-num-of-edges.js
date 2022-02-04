// problem: count the numbers of edges in a graph
// notes
    // solution 1
        // traverse every vertex using bfs/dfs
        // total up amount of edges in each vertex
        // if graph is undirected then return sum / 2
        // O(V) because we have to visit every vertex

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

const solution = (graph, vertices) => {
    const visited = new Map();
    for(let i = 0; i < vertices; i++) { // all nodes initially unvisited
        visited.set(i, false);
    }
    const queue = [];   // queue for bfs
    let edgeCount = 0;
    queue.push(0);  // starting node
    while(queue.length !== 0) {
        const currNode = queue.shift();
        if(visited.get(currNode) === true) continue;    // skipped visited nodes
        visited.set(currNode, true);
        console.log(`Visiting node ${currNode}...`);
        graph[currNode].forEach((edgeExists, neighbor) => {
            if(edgeExists) {    // as long as edge exists, add to count
                edgeCount++;
                // if haven't been visited, visit neighbor
                if(visited.get(neighbor) === false) {
                    queue.push(neighbor);
                }
            }
        });
    }
    // divide by two because undirected graph counts edges twice
    return edgeCount / 2;
}

console.log(`The number of in this graph is ${solution(graph, vertices)}`);