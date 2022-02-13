class MinHeap {
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
        return idx >= Math.floor(this.heap.length / 2) && idx < this.heap.length;
    }

    insert(elem) {
        this.heap.push(elem);
        this.heapifyUp(this.heap.length - 1);
    }

    peek() {
        if(this.heap.length === 0) return null; // return null on empty heap
        return this.heap[0];
    }

    extractMin() {
        if(this.heap.length === 0) return null; // return null on empty heap
        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // replace first elem with last elem
        this.heapifyDown(0);
        return min;
    }

    buildMinHeap(arr) {
        this.heap = arr;
        for(let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    heapifyUp(idx) {
        let currentIdx = idx;
        let parentIdx = this.parent(currentIdx);
        while(currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(parentIdx);
        }
    }

    heapifyDown(idx) {
        if(this.isLeaf(idx)) return;    // if node is lead cannot go deeper
        let leftIdx = this.left(idx);
        let rightIdx = this.right(idx);
        let smallestIdx = idx;    // initially the original idx
        if(this.heap[leftIdx] < this.heap[smallestIdx]) {
            smallestIdx = leftIdx;
        }
        if(this.heap[rightIdx] < this.heap[smallestIdx]) {
            smallestIdx = rightIdx;
        }
        if(smallestIdx !== idx) {   // if there was a smaller child
            this.swap(idx, smallestIdx);
            this.heapifyDown(smallestIdx);  // recursively continue down
        }
    }

    swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }
}

const minHeap = new MinHeap();
minHeap.buildMinHeap([4, 1, 9, 10, 15, 3]);
console.log(`After building min heap...`);
console.log(minHeap.heap);
console.log(`Inserting 24...`);
minHeap.insert(24);
console.log(minHeap.heap);
console.log(`Inserting 2...`);
minHeap.insert(2);
console.log(minHeap.heap);
console.log(`Extracting min: ${minHeap.extractMin()}`);
console.log(`Peeking min: ${minHeap.peek()}`);
console.log(minHeap.heap);
console.log(`First leaf: ${minHeap.heap[Math.floor(minHeap.heap.length / 2)]}`);
console.log(`First subtree: ${minHeap.heap[Math.floor(minHeap.heap.length / 2) - 1]}`);
