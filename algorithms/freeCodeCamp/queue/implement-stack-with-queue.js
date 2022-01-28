// problem: implement a stack with a queue
// notes
    // solution 1:
        // pop()
            // we can treat dequeue like pop
            // O(1)
        // push()
            // while the queue isn't empty, dequeue elements and push them into 
             // a temporary array, enqueue the new element, finally enqueue 
             // elements from the temporary array
            // O(n) - not that great
        // either way it seems either push or pop needs to be O(n) - depending 
         // on which is more important to keep constant time, you can swap the 
         // implementation

class FakeStack {
    constructor() {
        this.data = [];
    }
    
    pop() {
        return this.data.pop();
    }

    push(data) {
        const temp = [];
        while(this.data.length !== 0) {
            temp.push(this.data.shift());
        }
        while(temp.length !== 0) {
            this.data.push(temp.shift());
        }
        this.data.push(data);
    }

    print() {
        console.log(this.data);
    }
}

const stack = new FakeStack();
for(let i = 0; i < 5; i++) {
    stack.push(i);
}
console.log(`Printing stack...`);
stack.print();
console.log(`Popping stack: ${stack.pop()}`);
console.log(`Printing stack...`);
stack.print();