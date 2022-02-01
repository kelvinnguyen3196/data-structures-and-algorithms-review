// problem: return the nth node from the end in a linked list
// notes
    // solution 1: two pointers
        // move the first pointer to the nth element in the list
        // move the second pointer to the first element in the list
        // move both pointers forward until the first pointer reaches the end
        // return the second pointer
        // O(n)

const Node = require(`../../../data-structures/node.js`);
const LinkedList = require(`../../../data-structures/linked-list.js`);

const solution = (list, n) => {
    // move first pointer n elements in
    let firstPointer = list._head;
    for(let i = 0; i < n; i++) {
        firstPointer = firstPointer._next;
    }
    // set second pointer to first element
    let secondPointer = list._head;
    // move both pointers until firstPointer reaches end
    while(firstPointer !== null) {
        firstPointer = firstPointer._next;
        secondPointer = secondPointer._next;
    }
    return secondPointer;
}

const list = new LinkedList(new Node(1));
list.insertAtEnd(new Node(2));
list.insertAtEnd(new Node(3));
list.insertAtEnd(new Node(4));

const nthNode = 2;
const nthFromEndNode = solution(list, nthNode);
console.log(`Printing list...`);
list.print();
console.log(`The node that is ${nthNode} before the end is ${nthFromEndNode._data}`);