// problem: find height of a binary search tree
// notes
    // this will be a reimplementation of binary search tree
    // it's been a while and I would like to reimplement to refresh my memory
    
    // height of a binary tree is the number of edges from root to furthest leaf
    // solution 1: recursion
        // starting from root, create a recursion function that will keep track 
         // of the current node and number of edges traversed
        // when right and left of current node are null then we return edges
        // when either right or left are null then we recursively call our 
         // function and pass in left or right respectively (opposite) and edges
         // + 1
        // when neither right or left are null then take the maximum of 
         // recursively calling the function on the left and right child with 
         // edges + 1 on both
        // O(N) because we will visit every node


class Node {
    constructor(value) {
        this._left = null;
        this._right = null;
        this._data = value;
    }
    // #region getters
    get data() {
        return this._data;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }
    // #endregion
    // #region setters
    set data(value) {
        this._data = value;
    }

    set left(node) {
        this._left = node;
    }

    set right(node) {
        this._right = node;
    }
    // #endregion
}

class BinarySearchTree {
    constructor(node = null) {  // default to null in case no node given
        this._root = node;
    }
    // #region getter
    get root() {
        return this._root;
    }
    // #endregion
    // #region setter
    set root(node) {
        this._root = node;
    }
    // #endregion
    insert(node) {
        if(this.root === null) {    // empty tree
            this.root = node;
        }
        let currentNode = this.root;
        while(true) {
            if(currentNode.data === node.data) return;    // no duplicate numbers
            if(node.data > currentNode.data) {  // larger, go right
                if(currentNode.right) { // if a value exists
                    currentNode = currentNode.right;    // move pointer
                    continue;
                }
                currentNode.right = node;
                return;
            }
            else if(node.data < currentNode.data) {  // smaller, go left
                if(currentNode.left) {  // if a value exists
                    currentNode = currentNode.left; // move pointer
                    continue;
                }
                currentNode.left = node;
                return;
            }
        }
    }

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(node, value) {
        if(node === null) return null;
        else if(value > node.data) {    // larger, search right
            node.right = this.deleteHelper(node.right, value);
            return node;    // returns itself for recursion
        }
        else if(value < node.data) {
            node.left = this.deleteHelper(node.left, value);
            return node;    // returns itself for recursion
        }
        else {  // found match
            // case 1: no children
            if(!node.left && !node.right) {
                return null;
            }
            // case 2: one child 
            else if(!node.left) {   // we know both cannot be null at this point
                node = node.right;  // can set new value and return current node
                return node;
            }
            else if(!node.right) {  // or can return new value and will be set by
                return node.left;   // caller function
            }
            // case 3: two children
            else {
                const successor = this.findSuccessor(node.right);
                node.data = successor.data;
                // look for successor and delete it
                node.right = this.deleteHelper(node.right, successor.data);
                return node;
            }
        }
    }

    findSuccessor(node) {
        if(node.left === null) {
            return node;
        }
        const successor = this.findSuccessor(node.left);
        return successor;
    }

    inOrder(node) {
        if(node === null) return;   // hit leaf
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    preOrder(node) {
        if(node === null) return;
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    
    postOrder(node) {
        if(node === null) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    height() {
        return this.heightHelper(this.root, 0);
    }

    heightHelper(currentNode, edges) {
        // case 1: both left and right are null - reached leaf
        if(!currentNode.left && !currentNode.right) return edges;
        // case 2: either left or right are null
        else if(!currentNode.left) {
            return this.heightHelper(currentNode.right, edges + 1);
        }
        else if(!currentNode.right) {
            return this.heightHelper(currentNode.left, edges + 1);
        }
        // case 3: neither left or right are null - take max of both sides
        else {
            return Math.max(this.heightHelper(currentNode.left, edges + 1), 
                this.heightHelper(currentNode.right, edges + 1));
        }
    }
}
/*
10
  \
   15
  /  \
 13   20
     /
    17
      \
       18

*/
const tree = new BinarySearchTree();
tree.insert(new Node(10));
tree.insert(new Node(15));
tree.insert(new Node(13));
tree.insert(new Node(20));
tree.insert(new Node(17));
tree.insert(new Node(18));
tree.inOrder(tree.root);
console.log(`The tree's height is ${tree.height()}`);