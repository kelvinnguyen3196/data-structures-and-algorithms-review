// problem: check if a graph is a tree or not
// notes
    // for a graph to be a tree, there needs to be 
        // 1. no cycles
        // 2. all nodes must be connected
    // solution 1
        // run dfs/bfs 
        // as long as a node's neighbors only contain unvisited nodes and their 
         // parent node then there are no cycles
        // if all nodes have been visited then all nodes are connected

const vertices = 7;
const notTreeGraph = [];
for(let i = 0; i < vertices; i++) {
    notTreeGraph.push(new Array(vertices).fill(0));
}
notTreeGraph[0][1] = 1;
notTreeGraph[0][2] = 1;
notTreeGraph[0][3] = 1;
notTreeGraph[1][0] = 1;
notTreeGraph[1][4] = 1;
notTreeGraph[2][0] = 1;
notTreeGraph[2][4] = 1;
notTreeGraph[3][0] = 1;
notTreeGraph[3][5] = 1;
notTreeGraph[3][6] = 1;
notTreeGraph[4][1] = 1;
notTreeGraph[4][2] = 1;
notTreeGraph[4][6] = 1;
notTreeGraph[5][3] = 1;
notTreeGraph[6][3] = 1;
notTreeGraph[6][4] = 1;
/*
0--1--4
| \  / \
3   2  /
| \  /
5   6
*/

const treeVertices = 3;
const treeGraph = [];
for(let i = 0; i < treeVertices; i++) {
    treeGraph.push(new Array(vertices).fill(0));
}
treeGraph[0][1] = 1;
treeGraph[1][0] = 1;
treeGraph[1][2] = 1;
treeGraph[2][1] = 1;
/*
0--1--2
*/

let loopInGraph = false;    // assume no loop in graph

const dfsRecursive = (graph, visited, node, parent) => {
    if(visited.get(node) === true) return;  // if node has been visited skip it
    visited.set(node, true);    // set node to visited
    graph[node].forEach((edgeExists, neighbor) => {
        // if edge exists and has not been visited then call dfs
        if(edgeExists && visited.get(neighbor) === false) {
            // new currNode will be neighbor and currNode is the parent
            dfsRecursive(graph, visited, neighbor, node);
        }
        // if edge exists and it has been visited and it is not the parent node then there is a loop
        else if(edgeExists && visited.get(neighbor) === true && neighbor !== parent) {
            loopInGraph = true;
        }
    });
}

const solution = (graph, vertices) => {
    // use dfs to check if all nodes visited => connected
    // during dfs check if there are nodes connected that have been visited that
     // is not their parent
    const visited = new Map();
    for(let i = 0; i < vertices; i++) { // all nodes unvisited
        visited.set(i, false);
    }
    // start with node 0, no parent therefore -1
    dfsRecursive(graph, visited, 0, -1);
    let allVisited = true;  // assume true before checking
    for(let i = 0; i < vertices; i++) {
        if(visited.get(i) === false) {
            allVisited = false;
        }
    }
    if(allVisited && !loopInGraph) {
        return true;
    }
    return false;
}

const isTree = solution(notTreeGraph, vertices);
isTree ? console.log(`The graph is a tree`) : console.log(`The graph is not a tree`);

loopInGraph = false;    // reset value for loopInGraph
const isTree2 = solution(treeGraph, treeVertices);
isTree2 ? console.log(`The graph is a tree`) : console.log(`The graph is not a tree`);