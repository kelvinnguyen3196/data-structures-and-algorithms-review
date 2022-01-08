const Node = require('./node.js');

class HashTable {
    constructor(size) {
        this._hash = size;
        this._data = new Array(size);
    }

    hash(value) {
        return value % this._hash;
    }

    insert(node) {
        const index = this.hash(node.data); // hash to find index
        if(this._data[index]) { // if index is already occupied, chain
            let currentNode = this._data[index];
            while(currentNode) {
                if(currentNode.next === null) {
                    currentNode.next = node;
                    return;
                }
                currentNode = currentNode.next;
            }
        }
        this._data[index] = node;
    }

    search(value) {
        const index = this.hash(value);
        let currentNode = this._data[index];
        while(currentNode) {
            if(currentNode.data === value) {
                console.log(`${value} was found at index ${index}`);
                return value;
            }
            currentNode = currentNode.next;
        }
        console.log(`${value} was not found in the hash table`);
        return false;
    }

    print() {
        const length = this._data.length;
        for(let i = 0; i < length; i++) {
            let indexOutput = `[${i}]: `;
            let currentNode = this._data[i];
            while(currentNode) {
                indexOutput += `${currentNode.data} -> `;
                currentNode = currentNode.next;
            }
            console.log(indexOutput);
        }
    }
}

// create hash table
const hashTable = new HashTable(10);
// insert values
for(let i = 0; i < 20; i++) {
    // let randomNum = Math.floor(Math.random() * 100);
    // console.log(randomNum);
    // hashTable.insert(new Node(randomNum));
    hashTable.insert(new Node(i));

}
// search table
hashTable.search(4);
hashTable.search(180);
// print hash table
hashTable.print();