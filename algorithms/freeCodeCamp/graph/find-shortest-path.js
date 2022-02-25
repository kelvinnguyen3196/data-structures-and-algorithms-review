// problem: find the shortest path between two vertices
// notes
    // solution 1: dfs - not a solution
        // dfs should be able to find the shortest path for unweighted graph
        // after trial: this does not work due to order of node traversal
        // O(V + E)
    // solution 2: djikstra
        // general shortest path algorithm
        // O(E log(V))
    

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
graph[4][1] = 1;
graph[4][2] = 1;
graph[4][6] = 1;
graph[5][3] = 1;
graph[6][4] = 1;
/*
0--1--4
| \  / \
3   2  /
|    /
5   6
*/

const findMinIndex = (distance, visited) => {
    let minIndex;
    let min = Number.MAX_VALUE;
    for(let i = 0; i < distance.length; i++) {
        // if smaller than what we have and has not been visited
        if(distance[i] < min && !visited[i]) {
            minIndex = i;
            min = distance[i];
        }
    }
    return minIndex;
}

const solution = (graph, vertices, startingNode, endingNode) => {
    const distance = [];
    const visited = [];
    const previousNode = [];
    // assign starting values
    for(let i = 0; i < vertices; i++) {
        distance[i] = Number.MAX_VALUE;
        visited[i] = false;
        previousNode[i] = null;
    }
    distance[startingNode] = 0; // dist from starting node to starting node is 0
    for(let i = 0; i < vertices; i++) { // loop through all nodes
        const minIndex = findMinIndex(distance, visited);
        visited[minIndex] = true;   // mark current node as visited
        graph[minIndex].forEach((pathExists, neighbor) => {
            if(pathExists && !visited[neighbor] && distance[neighbor] > distance[minIndex] + graph[minIndex][neighbor]) {
                distance[neighbor] = distance[minIndex] + graph[minIndex][neighbor];
                previousNode[neighbor] = minIndex;
            }
        });
    }
    return distance[endingNode];
}

const startingNode = 5;
const endingNode = 6;
/*
0--1--4
| \  / \
3   2  /
|    /
5   6
*/
console.log(`The distance from ${startingNode} to ${endingNode} is ${solution(graph, vertices, startingNode, endingNode)}`);

