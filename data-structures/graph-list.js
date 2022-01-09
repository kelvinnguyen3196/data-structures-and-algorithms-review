const Node = require('./node.js');

class VerticesList {
    constructor(length = 0) {
        this._data = new Array(length);
    }

    push(fromNodeIdx, toNode) {
        if(!this._data[fromNodeIdx]) {
            this._data[fromNodeIdx] = toNode;
            return;
        }
        let currentNode = this._data[fromNodeIdx];
        while(currentNode) {
            if(currentNode.next === null) {
                currentNode.next = toNode;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    print() {
        const length = this._data.length;
        for(let i = 0; i < length; i++) {
            let currentIdxOutput = `${i}: `;
            let currentNode = this._data[i];
            while(currentNode) {
                currentIdxOutput += `${currentNode.data} -> `;
                currentNode = currentNode.next;
            }
            console.log(currentIdxOutput);
        }
    }
}

const verticesList = new VerticesList(5);
/* graph
    0-1
    |\
    2 3
    |/
    4
*/
verticesList.push(0, new Node(1));
verticesList.push(0, new Node(2));
verticesList.push(0, new Node(3));
verticesList.push(1, new Node(0));
verticesList.push(2, new Node(0));
verticesList.push(2, new Node(4));
verticesList.push(3, new Node(0));
verticesList.push(3, new Node(4));
verticesList.push(4, new Node(2));
verticesList.push(4, new Node(3));
verticesList.print();