// problem: reverse first k elements of a queue
// notes
    // solution 1
        // dequeue the first k elements of a queue and push them into a stack
        // pop the stack and enqueue the elements into a new queue
        // dequeue the rest of the original queue and enqueue them into the new 
         // queue

const solution = (k, queue) => {
    const copyQueue = [...queue];
    if(queue.length < k) return false;  // not enough elements
    const stack = [];
    let i = 0;
    while(i < k) {
        stack.push(copyQueue.shift());  // dequeue elements into stack
        i++;
    }
    const newQueue = [];
    while(stack.length > 0) {
        newQueue.push(stack.pop());
    }
    while(copyQueue.length > 0) {
        newQueue.push(copyQueue.shift());
    }
    return newQueue;
}

let queue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = [4, 7, 3, 20];
k.forEach((elem => {
    const newQueue = solution(elem, [...queue]);
    newQueue ? console.log(`Reversed the first ${elem} elements in queue: ${newQueue}`) :
    console.log(`Cannot reverse first ${elem} elements of a queue with length ${queue.length}`);
}));