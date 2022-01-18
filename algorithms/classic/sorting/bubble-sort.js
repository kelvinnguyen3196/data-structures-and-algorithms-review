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
testSorting.testSorting(bubbleSort);