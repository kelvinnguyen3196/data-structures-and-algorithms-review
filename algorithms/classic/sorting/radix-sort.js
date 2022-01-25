const getMax = (arr) => {
    let m = Number.MIN_VALUE;
    arr.forEach((elem) => {
        if(elem > m) {
            m = elem;
        }
    });
    return m;
}

const countingSort = (arr, d) => {
    // initialize counting arr to 10 because we are sorting by digit i.e. 0-9
    const countingArr = new Array(10);
    countingArr.fill(0);
    // count elements
    for(let i = 0; i < arr.length; i++) {
        // arr[i] divided by d to get digit we want in correct place and mod 10
        // to get the digit in the ones place alone
        countingArr[Math.floor((arr[i] / d) % 10)] += 1;
    }
    // modify countingArr to contain positions of elements
    for(let i = 0; i < countingArr.length - 1; i++) {
        countingArr[i + 1] += countingArr[i];
    }
    // build the output arr
    const output = new Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {  // backwards for stability
        output[countingArr[Math.floor(arr[i] / d) % 10] - 1] = arr[i];
        countingArr[Math.floor(arr[i] / d) % 10] -= 1;
    }
    return output;
}

const radixSort = (arr) => {
    const m = getMax(arr);
    let arrCopy = [...arr]; // deep clone bc bad practice to modify arguments
    for(let i = 1; Math.floor(m / i) > 0; i *= 10) {
        arrCopy = countingSort(arrCopy, i);
    }
    return arrCopy;
}

const testingSort = require(`./test-sorting.js`);
testingSort.testSorting(radixSort);