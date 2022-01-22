const partition = (arr, low, high) => {
    const pivot = arr[high];
    let lowIdx = low - 1;   // keeps track of elements to left of pivot
    for(let i = low; i < high; i++) { // all elements except for high (pivot)
        if(arr[i] < pivot) {    // current elem is smaller than pivot
            lowIdx++;
            const temp = arr[lowIdx];
            arr[lowIdx] = arr[i];
            arr[i] = temp;
        }
    }
    // swap pivot to be in correct location
    const temp = arr[lowIdx + 1];
    arr[lowIdx + 1] = arr[high];    // arr[high] = pivot
    arr[high] = temp;
    return lowIdx + 1;
}

const quickSort = (arr, low, high) => { // low = start idx, high = end idx
    if(low >= high) return; // single element
    // as long as high is larger than low - meaning more than one element
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
}

const testingSort = require(`./test-sorting.js`);
testingSort.testSorting(quickSort);