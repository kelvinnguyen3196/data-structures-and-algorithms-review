// problem: find the kth maximum value in a binary search tree
// if the in order is 2 3 5 10 11 20 23 then the 4th max value is 10
// notes
    // i will once again be reimplementing binary search tree class from 
     // scratch so that i can review
    
    // solution 1: save inOrder and return kth from end of array
        // have a modified version of inOrder traversal to save elements of tree
         // in sorted order
        // return the element that is the kth element from the end of the array
        // O(n) because inOrder takes O(n) time visiting every node
    // solution 2: traverse the tree in reverse inOrder 
        // create a function that traverses tree reverse inOrder (right, left) 
         // and keeps track of how many nodes we have visited once we hit the 
         // furthest right node
        // O(d + k) where d is depth of the furthest right node and k is the 
         // kth maximum value number of iterations we need to traverse the tree

// bonus problem: find the kth minimum value in a binary tree
// notes
    // solution 1: traverse the tree inOrder 
        // similar to solution 2 to in the above problem ^
        // O(d + k)
    
class Node {
    constructor(value = null) {
        this._data = value;
        this._left = null;
        this._right = null;
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
    constructor(node = null) {
        this._root = node;
    }
    // #region getters
    get root() {
        return this._root;
    }
    // #endregion
    insert(node) {
        if(node === null) { // empty tree
            this.root = node;
        }
        let currentNode = this.root;
        while(true) {
            if(node.data > currentNode.data) {  // larger, go right
                if(!currentNode.right) {    // if empty set value
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;    // if filled, traverse right
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
        if(currentNode === null) return null;   // reached end
        else if(value > currentNode.data) {  // larger, go right
            currentNode.right = this.deleteHelper(currentNode.right, value);
            return currentNode;
        }
        else if(value < currentNode.data) { // smaller, go left
            currentNode.left = this.deleteHelper(currentNode.left, value);
            return currentNode;
        }
        else {  // match
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

    findSuccessor(currentNode) {
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

    preOrder(currentNode) {
        if(!currentNode) return;
        console.log(currentNode.data);
        this.preOrder(currentNode.left);
        this.preOrder(currentNode.right);
    }

    postOrder(currentNode) {
        if(!currentNode) return;
        this.postOrder(currentNode.left);
        this.postOrder(currentNode.right);
        console.log(currentNode.data);
    }

    findKthMaxValue(currentNode, k, c) {
        if(currentNode === null || c.count >= k) return;
        
        this.findKthMaxValue(currentNode.right, k, c);
        c.count++;
        console.log(`Incrementing at ${currentNode.data}`);
        if(k === c.count) {
            console.log(`The ${k}th largest node is ${currentNode.data}`);
        }
        console.log(c.count);
        this.findKthMaxValue(currentNode.left, k, c);
    }

    findKthMinValue(currentNode, k, c) {
        if(currentNode === null || c.count >= k) return;

        this.findKthMinValue(currentNode.left, k, c);
        c.count++;
        if(c.count === k) {
            console.log(`The ${k}th minimum node is ${currentNode.data}`);
        }
        this.findKthMinValue(currentNode.right, k, c);
    }
}
/*
15
  \
   25
  /  \
 16   30
     /
    27
      \
       28
*/
const tree = new BinarySearchTree(new Node(15));
tree.insert(new Node(25));
tree.insert(new Node(30));
tree.insert(new Node(16));
tree.insert(new Node(27));
tree.insert(new Node(28));
tree.inOrder(tree.root);
const kthLargest = 3;
const kthMinimum = 2;
tree.findKthMaxValue(tree.root, kthLargest, { count: 0 });
tree.findKthMinValue(tree.root, kthMinimum, { count: 0 });