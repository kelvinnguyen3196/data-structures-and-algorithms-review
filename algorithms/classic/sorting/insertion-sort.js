const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            // in correct position
            if(arr[j] >= arr[j - 1]) break;
            // otherwise it is smaller
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }

    return arr;
}

const testing = require(`./test-sorting.js`);
testing.testSorting(insertionSort);