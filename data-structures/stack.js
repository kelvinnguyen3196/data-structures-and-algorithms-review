// LIFO - used for DFS
// similar to a stack of books
class Stack {
    constructor() {
        this._data = {};
        this._top = null;
    }

    push(data) {    // inserts element at top
        if(!this._top) {
            this._top = 0;
        }
        this._top === null ? this._top = 0 : this._top += 1;
        this._data[this._top] = data;
    }

    pop() { // returns top element after removing from stack
        if(this._top === null) return;
        const top = this._data[this._top];
        delete this._data[this._top];
        this._top === 1 ? this._top = null : this._top -= 1;
        return top;
    }

    top() { // returns top element without removing from stack
        return this._data[this._top];
    }

    isEmpty() { // returns true if stack is empty
        if(this._top === null) return true;
        return false;
    }

    print() {
        const keys = Object.keys(this._data);
        let stackElements = '';
        keys.forEach((key) => {
            stackElements += `${this._data[key]}, `;
        });
        stackElements = stackElements.substring(0, stackElements.length - 2);
        console.log(stackElements);
    }
}

// create stack
const stack = new Stack();
// push data
for(let i = 0; i < 10; i++) {
    stack.push(i);
}
// print stack after insert
console.log(`After inserting elements...`);
stack.print();
// pop data
console.log(`Popped: ${stack.pop()}`);
// print stack
console.log(`After popping elements...`);
stack.print();