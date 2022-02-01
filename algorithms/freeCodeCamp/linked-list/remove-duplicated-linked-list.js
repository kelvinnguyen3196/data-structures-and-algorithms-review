// problem: remove duplicates from a linked list
// notes
    // solution 1: hashmap
        // traverse the linked list and input elements into a hashmap
        // if an element exists in the hashmap then remove the element by 
         // setting the next equal to the next's next
        // O(n)

const Node = require(`../../../data-structures/node.js`);
const LinkedList = require(`../../../data-structures/linked-list.js`);

const solution = (list) => {
    const duplicateMap = new Map();
    let currentNode = list._head;
    while(currentNode.next !== null) {
        // put current node in map
        duplicateMap.set(currentNode._data, currentNode);
        // this algorithm checks if the next element is a duplicate before 
        // moving to the next element because it will immediately add the 
        // current element in each iteration - therefore we need to continuously
        // check the next element until we reach an element that isn't duplicate
        while(duplicateMap.has(currentNode._next._data)) {
            currentNode._next = currentNode._next._next;
        }
        currentNode = currentNode._next;
    }
    return list;
}

const list = new LinkedList(new Node(1));
list.insertAtEnd(new Node(2));
list.insertAtEnd(new Node(3));
list.insertAtEnd(new Node(4));
list.insertAtEnd(new Node(4));
list.insertAtEnd(new Node(4));
list.insertAtEnd(new Node(5));
list.insertAtEnd(new Node(5));
list.insertAtEnd(new Node(6));
console.log(`Printing list...`);
list.print();
const removedDuplicatedList = solution(list);
console.log(`Printing list with removed duplicates...`);
removedDuplicatedList.print();