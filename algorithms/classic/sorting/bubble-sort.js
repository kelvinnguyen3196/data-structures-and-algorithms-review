const lists = [
    [4, 3, 1, -1, 0, 50, 10],
    [1, 0],
    [6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6]
]

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {   // limits iterate to unsorted portion
        for(let j = 0; j < arr.length - i - 1; j++) {   // iterates through arr
            if(arr[j] > arr[j + 1]) {   // swap numbers
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const testSorting = require(`./test-sorting.js`);
testSorting.testSorting(lists, bubbleSort);