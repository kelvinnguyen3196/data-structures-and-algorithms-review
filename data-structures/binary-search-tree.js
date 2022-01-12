// TODO: draw binary search tree and operations for visual understanding
// TODO: how to calculate diameter/width of a binary search tree
class Node {
    constructor(value) {
        this._data = value;
        this._left = null;
        this._right = null;
    }
    // #region setters and getters
    get data() {
        return this._data;
    }

    set data(d) {
        this._data = d;
    }

    get left() {
        return this._left;
    }

    set left(node) {
        this._left = node;
    }

    get right() {
        return this._right;
    }

    set right(node) {
        this._right = node;
    }
    // #endregion
}

class BinarySearchTree {
    constructor(node = null) {
        this._root = node;
    }

    get root() {
        return this._root;
    }

    insert(node) {
        if(this._root === null) { // empty tree
            this._root = node;
            return;
        }
        let currentNode = this._root;
        while(true) {
            if(currentNode.data === node.data) return; // no duplicates
            else if(currentNode.data > node.data) {
                if(currentNode.left === null) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            }
            else if(currentNode.data < node.data) {
                if(currentNode.right === null) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    search(value) {
        let currentNode = this._root;
        while(true) {
            if(!currentNode) {
                return null;
            }
            else if(currentNode.data === value) {
                return currentNode;
            }
            else if(currentNode.data > value) {
                currentNode = currentNode.left;
            }
            else if(currentNode.data < value) {
                currentNode = currentNode.right;
            }
        }
    }

    delete(value) {
        this._root = this.deleteHelper(this._root, value);
    }

    deleteHelper(node, value) {
        if(node === null) { // empty tree return null
            return null;
        }
        else if(node.data > value) {    // go left
            node.left = this.deleteHelper(node.left, value);
            return node;
        }
        else if(node.data < value) {    // go right
            node.right = this.deleteHelper(node.right, value);
            return node;
        }
        else {  // found match - delete this node
            // case 1 - no children
            if(node.left === null && node.right === null) {
                return null;
            }
            // case 2 - one child
            else if(node.left === null) {
                return node.right;  // replace this node with right node
            }
            else if(node.right === null) {
                return node.left;   // replace this node with left node
            }
            // case 3 - two children
            else {
                let successor = this.findSuccessor(node.right);
                node.data = successor.data;
                node.right = this.deleteHelper(node.right, successor.data);
                return node;
            }
        }
    }

    findSuccessor(node) {
        let current = node;
        while(current.left !== null) {
            current = current.left;
        }
        return current;
    }
    
    findPredecessor(node) {
        let current = node;
        while(current.right != null) {
            current = current.right;
        }
        return current;
    }

    inOrder(node) {
        if(node === null) return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    preOrder(node) {    // creating a copy of a tree
        if(node === null) return;
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node) {   // deleting a tree
        if(node === null) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    depth(value) {  // the number of edges from the node to the tree's root
        return this.depthHelper(this._root, value, 0);
    }

    depthHelper(node, value, edges) {
        if(node.data === value) return edges;   // found match
        if(node === null) return null; // no tree
        if(node.right === null && node.left === null) return null; // not found
        if(node.right && node.left) {
            return Math.max(this.depthHelper(node.left, value, edges + 1), 
                this.depthHelper(node.right, value, edges + 1));
        }
        if(node.right) {
            return this.depthHelper(node.right, value, edges + 1);
        }
        if(node.left) {
            return this.depthHelper(node.left, value, edges + 1);
        }
    }

    maxDepth() {
        return this.maxDepthHelper(this._root, 0);
    }

    maxDepthHelper(node, edges) {
        if(node.left === null && node.right === null) return edges;
        if(node === null) return 0; // empty tree
        if(node.left && node.right) {
            return Math.max(this.maxDepthHelper(node.left, edges + 1), 
                this.maxDepthHelper(node.right, edges + 1));
        }
        if(node.left) {
            return this.maxDepthHelper(node.left, edges + 1);
        }
        if(node.right) {
            return this.maxDepthHelper(node.right, edges + 1);
        }
    }
}
// create binary search tree
const bst = new BinarySearchTree(new Node(4));
/*
   4
  / \
 2   6
/ \ / \
1 3 5 7
*/
// insert nodes
bst.insert(new Node(2));
bst.insert(new Node(6));
bst.insert(new Node(1));
bst.insert(new Node(3));
bst.insert(new Node(5));
bst.insert(new Node(7));
// search for number
const numToSearch = 31;
const searchResult = bst.search(numToSearch) ? `${numToSearch} was found` : `${numToSearch} was not found`;
console.log(searchResult);
// print tree in order
console.log(`In-Order: `);
bst.inOrder(bst.root);
// print tree pre order
console.log(`Pre-Order: `);
bst.preOrder(bst.root);
// print tree post order
console.log(`Post-Order: `);
bst.postOrder(bst.root);
// delete node
bst.delete(4);
// find depth of node
const depthNode = 5;
const depth = bst.depth(depthNode);
depth === null ? console.log(`Node ${depthNode} does not exist`) :
    console.log(`The depth of node ${depthNode} is ${depth}`);
// find max depth of tree
console.log(`The max depth of the tree is ${bst.maxDepth()}`);
console.log(bst);