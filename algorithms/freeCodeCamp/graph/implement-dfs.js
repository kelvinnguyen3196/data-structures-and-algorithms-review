// problem: implement depth first search
// notes
    // dfs uses a stack
    // focuses on exploring depth before breadth

const Node = require(`../../../data-structures/node.js`);
const VerticesList = require(`../../../data-structures/graph-list.js`);

const vertices = 7;
const graph = new VerticesList();
graph.push(0, new Node(1));
graph.push(0, new Node(2));
graph.push(0, new Node(3));
graph.push(1, new Node(0));
graph.push(1, new Node(4));
graph.push(2, new Node(0));
graph.push(2, new Node(4));
graph.push(3, new Node(0));
graph.push(3, new Node(5));
graph.push(3, new Node(6));
graph.push(4, new Node(1));
graph.push(4, new Node(2));
graph.push(4, new Node(6));
graph.push(5, new Node(3));
graph.push(6, new Node(3));
graph.push(6, new Node(4));
graph.print();
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

const dfsIterative = (graph) => {
    const visited = new Map();
    for(let i = 0; i < vertices; i++) { // no nodes have been visited
        visited.set(i, false);  
    }
    const stack = [];
    stack.push(0);  // starting node
    while(stack.length !== 0) {
        const currNode = stack.pop();
        if(visited.get(currNode) === true) continue;
        visited.set(currNode, true);
        // console.log(`Visiting node ${currNode}...`);
        let neighbor = graph._data[currNode];
        while(neighbor) {
            if(neighbor._data && visited.get(neighbor._data) === false) {
                // console.log(`\tPushing node ${neighbor._data}...`);
                stack.push(neighbor._data);
            }
            neighbor = neighbor._next;
        }
        // console.log(visited);
    }
    printResults(vertices, visited);
}

dfsIterative(graph);