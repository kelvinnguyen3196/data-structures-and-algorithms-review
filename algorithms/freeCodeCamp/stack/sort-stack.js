// problem: sort values in a stack
// notes
    // solution 1
        // pop values from a stack and put into binary search tree
        // use inorder traversal to get sorted order
        // O(n) + O(n log(n)) + O(n) = O(n log(n))
        // popping all elems + inserting into tree + inorder traversal

class Tree {
    constructor(node) {
        this.root = node;
    }

    insert(node) {
        let currentNode = this.root;
        while(true) {
            if(node.data < currentNode.data) {  // smaller so go left
                if(currentNode.left !== null) {
                    currentNode = currentNode.left;
                    continue;
                }
                currentNode.left = node;
                break;
            }
            else if(node.data > currentNode.data) {
                if(currentNode.right !== null) {
                    currentNode = currentNode.right;
                    continue;
                }
                currentNode.right = node;
                break;
            }
        }
    }

    returnInorder(node, arr) {
        if(node === null) return;
        this.returnInorder(node.left, arr);
        arr.push(node.data);
        this.returnInorder(node.right, arr);
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const stack = [4, 5, 6, 3, 9, 1, 2];

const solution = (stack) => {
    const first = stack.pop();
    const tree = new Tree(new Node(first));
    while(stack.length !== 0) {
        const curr = stack.pop();
        tree.insert(new Node(curr));
    }
    const sorted = [];
    tree.returnInorder(tree.root, sorted, stack.length);
    return sorted;
}

console.log(`stack: ${stack}`);
console.log(`sorted: ${solution(stack)}`);