// problem: reverse a linked list
// notes
    // solution 1: using stack
        // reverse a linked list
            // while linked list is not empty
                // remove head and push into a stack
            // while stack is not empty
                // pop elems and insert elements at tail of new linked list
        // O(n) + O(n) = O(n)
        // putting list into stack + creating new list from stack
    // solution 2: using three pointers
        // set prev to null
        // set curr to head
        // set next to head.next
        // while curr != null
            // curr.next = prev
            // prev = curr
            // curr = next
            // next = next.next
        // O(n)
        // same asymptotic big O, but faster because only one traversal

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
        this.tail = node;
    }

    popHead() {
        if(this.head === null) return false;    // empty list
        const headElem = this.head;
        this.head = this.head.next;
        headElem.next = null;
        return headElem;
    }

    insertAtTail(node) {
        if(this.head === null) {    // empty list
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
    }

    isEmpty() {
        const empty = this.head ? false : true;
        return empty;
    }

    print() {
        let currentNode = this.head;
        let list = ``;
        while(currentNode !== null) {
            list += `${currentNode.data} -> `;
            currentNode = currentNode.next;
        }
        console.log(list);
    }
}

const solution = (list) => {
    let prev = null;
    let curr = list.head;
    let next = list.head.next;
    // swap head and tail
    const temp = list.tail;
    list.tail = list.head;
    list.head = temp;
    while(curr !== null) {
        curr.next = prev;
        prev = curr;
        curr = next;
        if(next !== null) {
            next = next.next;
        }
    }
    return list;
}

const list = new LinkedList(new Node(1));
list.insertAtTail(new Node(2));
list.insertAtTail(new Node(3));
list.insertAtTail(new Node(4));
list.insertAtTail(new Node(5));
console.log(`Printing linked list...`);
list.print();
console.log(`Printing reversed linked list...`);
const reversedList = solution(list);
reversedList.print();