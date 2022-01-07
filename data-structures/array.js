class MyArray {
    constructor(length = 0) {
        this._length = length;
        this._data = {};
        // push null data to length
        for(let i = 0; i < length; i++) {
            this._data[i] = null;
        }
    }

    get length() {
        return this._length;
    }

    get(index) {
        return this._data[index];
    }

    set(index, value) {
        this._data[index] = value;
    }

    print() {
        let output = '[ ';  // open bracket
        for(let i = 0; i < this._length; i++) {
            output += `${this._data[i]}`;   // add data
            if(i === this._length - 1) {    // if last element, skip comma
                output += ` `;
                break;
            }
            output += `, `  // add comma
        }
        output += `]`;  // closing bracket
        console.log(output);
    }
}

// create array
const arr = new MyArray(4);
// set values
arr.set(2, 4);
arr.set(0, 45);
// log array object and length
console.log(arr);
console.log(`arr length: ${arr.length}`);
// log array with built in function
arr.print();