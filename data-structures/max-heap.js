class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    left(idx) {
        return (idx * 2) + 1;
    }

    right(idx) {
        return (idx * 2) + 2;
    }

    isLeaf(idx) {
        // floor(amount of nodes / 2) = where first leaf is
        // greater than/equal to first leaf and less than max size of heap
        return idx >= Math.floor(this.heap.length / 2) && idx < this.heap.length;
    }

    insert(elem) {
        this.heap.push(elem);
        this.heapifyUp(this.heap.length - 1);
    }
    
    peek() {
        // return null on empty heap
        if(this.heap.length === 0) return null;
        return this.heap[0];
    }

    extractMax() {
        // return null on empty heap
        if(this.heap.length === 0) return null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    buildMaxHeap(arr) {
        this.heap = arr;
        for(let i = (Math.floor(this.heap.length / 2)) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    heapifyDown(idx) {
        if(this.isLeaf(idx)) return;    // if node is leaf, return
        let leftChild = this.left(idx);
        let rightChild = this.right(idx);
        let largestIdx = idx;   // starts off as idx
        if(this.heap[leftChild] > this.heap[largestIdx]) {
            largestIdx = leftChild;
        }
        if(this.heap[rightChild] > this.heap[largestIdx]) {
            largestIdx = rightChild;
        }
        if(largestIdx !== idx) {    // if largest is not the starting node
            this.swap(idx, largestIdx);
            this.heapifyDown(largestIdx);   // continue checking
        }
    }

    heapifyUp(idx) {
        let currentIdx = idx;
        let parentIdx = this.parent(idx);
        // while currentIdx is larger, move up
        while(currentIdx > 0 && this.heap[currentIdx] > this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            // after swapping change pointers and continue
            currentIdx = parentIdx;
            parentIdx = this.parent(parentIdx);
        }
    }

    swap(idx1, idx2) {
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }
}

const heap = new MaxHeap();
heap.buildMaxHeap([5, 2, 4, 1, 9, 3]);
console.log(`After building...`);
console.log(heap.heap);
console.log(`Inserting 10...`);
heap.insert(10);
console.log(`Inserting 8...`);
heap.insert(8);
console.log(heap.heap);
const max = heap.extractMax();
console.log(`Extracting max: ${max}`);
console.log(`Peeking max: ${heap.peek()}`);
console.log(heap.heap);