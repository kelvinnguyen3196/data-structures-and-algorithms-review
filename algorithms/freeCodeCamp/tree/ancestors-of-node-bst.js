// problem: given a binary tree and a key, print all ancestors of the key in the 
 // given binary tree
    // example
/*
            1
           / \
          2   3
         / \
        4   5
       /
      7
*/
    // using the tree above with the key 7, the ancestors are 4, 2, and 1

    // notes
        // i will be reimplementing binary search tree from scratch to help me 
         // review
    // solution 1
        // solution = (currentNode, key, stack)
        // if current node is null, reached end, return empty stack
        // if current node match key then return stack
        // create a copy of stack that will be used for this function
            // this is because we want the behavior or pass by value so that 
             // when recursive calls return they do not permanent modify the 
             // stack if it does not contain a match
            // since this is a binary search tree we probably don't need to 
             // create a copy of the stack because we will always be going in 
             // the correct direction until we find out the node either exists 
             // or does not exist in the tree
        // traverse the tree in order
        // before recursive call push the current node into new stack and pass
         // new stack

class Node {
    #_data;
    #_left;
    #_right;
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
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
    constructor(node = null)  {
        this.root = node;
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
        }
        let currentNode = tree.root;
        while(true) {   
            if(node.data > currentNode.data) {  // larger, go right
                if(!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
            else if(node.data < currentNode.data) {
                if(!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            }
        }
    }

    delete(value) {
        this.root = this.deleteHelper(this.root, value);
    }

    deleteHelper(currentNode, value) {
        if(!currentNode) return null;   // end of tree
        else if(value > currentNode.data) { // larger, go right
            currentNode.right = this.deleteHelper(currentNode.right, value);
            return currentNode;
        }
        else if(value < currentNode.data) { // smaller, go left
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
            // case 3: no children
            const successor = this.findSuccessor(currentNode.right);
            currentNode.data = successor.data;
            currentNode.right = this.deleteHelper(currentNode.right, successor.data);
            return currentNode;
        }
    }

    findSuccessor(currentNode) {
        if(!currentNode.left) return currentNode;
        return this.findSuccessor(currentNode.left);
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

    height(currentNode, height) {
        if(!currentNode.left && !currentNode.right) return height;
        else if(!currentNode.left) {
            return this.height(currentNode.right, height + 1);
        }
        else if(!currentNode.right) {
            return this.height(currentNode.left, height + 1);
        }
        else {  // neither left or right are null
            return Math.max(this.height(currentNode.left, height + 1),
                this.height(currentNode.right, height + 1));
        }
    }

    depth(value) {
        return this.depthHelper(this.root, value, 0);
    }

    depthHelper(currentNode, value, depth) {
        if(!currentNode) return -1;  // value doesn't exist
        else if(value > currentNode.data) { // larger, go right
            return this.depthHelper(currentNode.right, value, depth + 1);
        }
        else if(value < currentNode.data) { // smaller, go left
            return this.depthHelper(currentNode.left, value, depth + 1);
        }
        else {  // value matches current node
            return depth;
        }
    }

    findAncestors(key) {
        return this.findAncestorsHelper(tree.root, key, []);
    }

    findAncestorsHelper(currentNode, key, stack) {
        if(!currentNode) return []; // empty stack because key doesn't exist
        if(currentNode.data === key) return stack;  // return what we have so far
        const clonedStack = [...stack];
        clonedStack.push(currentNode.data);
        if(key > currentNode.data) {    // larger, go right
            return this.findAncestorsHelper(currentNode.right, key, clonedStack);
        }
        else if(key < currentNode.data) {
            return this.findAncestorsHelper(currentNode.left, key, clonedStack);
        }
    }
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
const formatAncestors = (stack) => {
    let ancestors = '';
    while(stack.length > 0) {
        ancestors += `${stack.pop()}, `;
    }
    return ancestors;
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
console.log(`The height of the tree is ${tree.height(tree.root, 0)}`);
const findDepth = 12;
const ancestorsNode = 13;
console.log(`The depth of node ${findDepth} is ${tree.depth(findDepth)}`);
console.log(`The ancestors of node ${ancestorsNode} is ${formatAncestors(tree.findAncestors(ancestorsNode))}`);