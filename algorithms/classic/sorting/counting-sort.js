const countingSort = (arr) => {
    // #region negative numbers support
    let largestNegativeNumber = 0;
    arr.forEach(elem => {
        if(elem < largestNegativeNumber) {
            largestNegativeNumber = elem;
        }
    });
    // #endregion
    let negativeOffset = Math.abs(largestNegativeNumber);
    const countingArr = new Array(200); // large number so it will contain all elements
    countingArr.fill(0);    // fill arr with 0's
    // store count of each elem
    arr.forEach((elem, idx) => {
        countingArr[elem + negativeOffset] += 1;
    });
    // change countingArr so count now stores position of element
    for(let i = 0; i < countingArr.length - 1; i++) {
        countingArr[i + 1] += countingArr[i];
    }
    // build sorted arr
    const sortedArr = new Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {
        sortedArr[countingArr[arr[i] + negativeOffset] - 1] = arr[i];
        countingArr[arr[i] + negativeOffset] -= 1;
    }
    return sortedArr;
}

const testingSort = require(`./test-sorting.js`);
testingSort.testSorting(countingSort);