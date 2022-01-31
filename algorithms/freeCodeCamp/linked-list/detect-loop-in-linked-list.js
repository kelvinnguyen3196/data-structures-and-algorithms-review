// problem: detect a loop in a linked list
// notes
    // solution 1
        // traverse linked list 
        // check if element is in hash map
        // if element exists in hash map then we have a loop
        // otherwise continue
        // O(n)

const Node = require(`../../../data-structures/node.js`);
const LinkedList = require(`../../../data-structures/linked-list.js`);

const solution = (list) => {
    const visitedMap = new Map();
    let currentNode = list._head;
    while(currentNode !== null) {
        if(visitedMap.has(currentNode._data)) return true;
        visitedMap.set(currentNode._data, currentNode);
        currentNode = currentNode._next;
    }
    return false;
}

// no loop list
const list = new LinkedList(new Node(1));
list.insertAtEnd(new Node(2));
list.insertAtEnd(new Node(3));
list.insertAtEnd(new Node(4));
list.insertAtEnd(new Node(5));
const loopInList = solution(list);
console.log(`Printing list...`);
list.print();
loopInList ? console.log(`There is a loop in the list`) : console.log(`There is no loop`);
// looped list
const loopedListlist = new LinkedList(new Node(1));
loopedListlist.insertAtEnd(new Node(2));
loopedListlist.insertAtEnd(new Node(3));
const node = new Node(4);
loopedListlist.insertAtEnd(node);
loopedListlist.insertAtEnd(new Node(5));
loopedListlist.insertAtEnd(node);
const loopInLoopedList = solution(loopedListlist);
console.log(`Printing list...`);
// loopedListlist.print();
console.log(`Will not print list because it has a loop`);
loopInLoopedList ? console.log(`There is a loop in the list`) : console.log(`There is no loop`);