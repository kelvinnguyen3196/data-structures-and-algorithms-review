// problem: find nodes at k distance from the root
// notes
    // i will also reimplement binary search tree from scratch so i can review 
     // more
    
    // solution 1: in order traversal keeping track of nodes jumped so far
    // keep a function argument by value to keep track of nodes jumped
    // third argument passed by reference to keep track of nodes that are k 
     // distance away

class Node {
    #_data;
    #_left;
    #_right;
    constructor(value) {
        this.#_data = value;
        this.#_left = null;
        this.#_right = null;
    }
    // #region getters
    get data() {
        return this.#_data;
    }

    get left() {
        return this.#_left;
    }

    get right() {
        return this.#_right;
    }
    // #endregion
    // #region setters
    set data(value) {
        this.#_data = value;
    }

    set left(node) {
        this.#_left = node;
    }

    set right(node) { 
        this.#_right = node;
    }
    // #endregion
}

class BinarySearchTree {
    #_root;
    constructor(node = null) {
        this.#_root = node;
    }
    // #region getter
    get root() {
        return this.#_root;
    }
    // #endregion
    // #region setter
    set root(node) {
        this.#_root = node;
    }
    // #endregion

    insert(node) {
        if(!this.root) {    // empty tree
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while(true) {
            if(node.data > currentNode.data) {  // larger, go right
                if(!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
            else if(node.data < currentNode.data) { // smaller, go left
                if(!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            }
        }
    }

    delete(value) {
        this.deleteHelper(this.root, value);
    }

    deleteHelper(currentNode, value) {
        if(currentNode === null) return;    // end of tree
        else if(value > currentNode.data) {  // larger, go right
            currentNode.right = this.deleteHelper(currentNode.right, value);
            return currentNode;
        }
        else if(value < currentNode.data) {  // smaller, go left
            currentNode.left = this.deleteHelper(currentNode.left, value);
            return currentNode;
        }
        else {  // found match  
            // case 1: no children
            if(!currentNode.left && !currentNode.right) {
                return null;
            }
            // case 2: one child
            else if(!currentNode.left) {
                return currentNode.right;
            }
            else if(!currentNode.right) {
                return currentNode.left;
            }
            // case 3: two children
            const successor = this.findSuccessor(currentNode.right);
            currentNode.data = successor.data;
            currentNode.right = this.deleteHelper(currentNode.right, successor.data);
            return currentNode;
        }
    }

    findSuccessor(currentNode) {    // must pre-pass right child
        if(!currentNode.left) return currentNode;
        const successor = this.findSuccessor(currentNode.left);
        return successor;
    }

    inOrder(currentNode) {
        if(!currentNode) return;
        this.inOrder(currentNode.left);
        console.log(currentNode.data);
        this.inOrder(currentNode.right);
    }

    preOrder() {

    }

    postOrder() {

    }
}

// nodes = []
const solution = (currentNode, k, depth, nodes) => {
    if(!currentNode) return;    // reached end
    if(k === depth) {   // current node is k depth
        nodes.push(currentNode.data);
        return;
    }
    solution(currentNode.left, k, depth + 1, nodes);
    solution(currentNode.right, k, depth + 1, nodes);
}
/*
         8
       /   \
      3    10
     / \      \
    1   6      14
       / \    /
      4   7  13 
*/
const formatNodes = (arr) => {
    let nodes = '';
    arr.forEach((elem) => {
        nodes += `${elem}, `
    });
    return nodes;
}

const tree = new BinarySearchTree(new Node(8));
tree.insert(new Node(3));
tree.insert(new Node(10));
tree.insert(new Node(1));
tree.insert(new Node(6));
tree.insert(new Node(14));
tree.insert(new Node(4));
tree.insert(new Node(7));
tree.insert(new Node(13));
tree.inOrder(tree.root);
const kDist = 3;
const nodesKDist = [];
solution(tree.root, kDist, 0, nodesKDist);
console.log(`The nodes that are ${kDist} distance away from the root are: ${formatNodes(nodesKDist)}`);