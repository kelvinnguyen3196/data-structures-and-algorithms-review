// FIFO - used for BFS
// similar to a line at a store
const Node = require('./node.js');

class Queue {
    constructor() {
        this._front = null;
        this._back = null;
    }

    enqueue(node) { // insert element to back of queue
        if(this._front === null) {  // first element
            this._front = node;
            this._back = node;
            return;
        }
        this._back.next = node;
        this._back = node;
    }

    dequeue() { // removes element the front of the queue
        if(this._front === null) return;    // if empty return
        const front = this._front;
        this._front = this._front.next;
        // if last element set back to null
        this._back = this._back === this._front ? null : this._back;
        return front;
    }

    top() {
        return this._front.data;
    }

    isEmpty() {
        return this._front ? false : true;
    }

    print() {
        let currentNode = this._front;
        let output = `Printing queue: `;
        while(currentNode) {
            output += `${currentNode.data}, `;
            currentNode = currentNode.next;
        }
        output = output.substring(0, output.length - 2);
        if(output === `Printing queue`) {
            output += `: queue is empty`;
        }
        console.log(output);
    }
}

// create queue
const queue = new Queue();
// add new nodes
queue.enqueue(new Node(4));
queue.enqueue(new Node(3));
queue.enqueue(new Node(15));
// check if queue is empty
console.log(`The queue is empty: ${queue.isEmpty()}`);
// print front of queue
console.log(`Front of queue: ${queue.top()}`);
// print queue
console.log(`After inserting nodes into queue...`);
queue.print();
// remove elements from queue
queue.dequeue();
queue.dequeue();
// print queue
console.log(`After removing nodes from queue...`);
queue.print();
console.log(queue);