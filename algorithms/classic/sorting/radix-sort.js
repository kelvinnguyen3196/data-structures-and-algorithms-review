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
    let negNums = [];
    let posNums = [];
    arr.forEach(elem => {
        elem < 0 ? negNums.splice(0, 0, elem) : posNums.splice(0, 0, elem);
    });
    if(negNums.length > 0) {
        negNums.forEach((elem, idx, arr) => {
            arr[idx] *= -1;
        });
        const min = getMax(negNums);
        for(let i = 1; Math.floor(min / i) > 0; i *= 10) {
            negNums = countingSort(negNums, i);
        }
        negNums = negNums.reverse();
        negNums.forEach((elem, idx, arr) => {
            arr[idx] *= -1;
        });
    }
    const max = getMax(posNums);
    for(let i = 1; Math.floor(max / i) > 0; i *= 10) {
        posNums = countingSort(posNums, i);
    }
    return negNums.concat(posNums);
}

const testingSort = require(`./test-sorting.js`);
testingSort.testSorting(radixSort);