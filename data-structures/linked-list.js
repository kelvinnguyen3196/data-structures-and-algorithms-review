class Node {
    _data;
    _next;
    constructor(data = null) {
        this._data = data;
        this._next = null;
    }

    // _region getters
    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }
    // _endregion
    // _region setters
    set data(data) {
        this._data = data
    }

    set next(node) {
        this._next = node;
    }
    // _endregion
}

class LinkedList {
    _head;
    _tail;
    constructor(head = null) {
        this._head = head;
        this._tail = head;
    }

    insertAtEnd(node) {
        this._tail.next = node;
        this._tail = this._tail.next;
    }

    insertAtHead(node) {
        node.next = this._head;
        this._head = node;
    }

    delete(value) {
        let foundNode = this.search(value);
        if(!foundNode) {
            console.log(`Cannot delete node ${value} - it is not in the list`);
            return;
        }
        if(foundNode.next === this._tail) {
            this._tail = foundNode;
        }
        foundNode.next = foundNode.next.next;
    }

    deleteAtHead() {
        this._head = this._head.next;
    }

    search(value) { // returns node before the found node
        if(!this._head) return false;
        if(this._head.data === value) return this._head;
        let nextNode = this._head.next;
        let trailingNode = this._head;
        while(nextNode) {
            if(nextNode.data === value) return trailingNode;
            trailingNode = nextNode;
            nextNode = nextNode.next;
        }
        return false;
    }

    isEmpty() {
        if(this._head) return false;
        return true;
    }

    print() {
        let currentNode = this._head;
        let output = '';
        while(currentNode) {
            output += `${currentNode.data} -> `
            currentNode = currentNode.next;
        }
        console.log(output);
    }
}

// create linked list
const list = new LinkedList(new Node(3));
// insert new nodes at end and head
list.insertAtEnd(new Node(4));
list.insertAtEnd(new Node(54));
list.insertAtHead(new Node(23));
// print list
console.log(`After inserting nodes...`);
list.print();
// search for values
const searchValue = [3];
searchValue.forEach((elem) => {
    list.search(elem) ? console.log(`Found ${elem} in linked list`) : console.log(`Did not find ${elem} in linked list`);
});
// delete values
list.delete(40);
list.delete(4);
list.deleteAtHead();
// print linked list
console.log(`After deleting nodes...`);
list.print();