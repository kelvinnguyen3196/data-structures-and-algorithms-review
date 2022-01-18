const selectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {   // keeps track of sorted
        let minIndex = i;   // minimum number is first every iteration
        for(let j = i + 1; j < arr.length; j++) {   // loops through unsorted
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // after traversing unsorted, swap with sorted tracker
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

const testSorting = require('./test-sorting.js');
testSorting.testSorting(selectionSort);