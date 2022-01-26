// problem: rearrange positive and negative values in an array

// An array contains both positive and negative numbers in random order. Re-
// arrange the array elements so that positive and negative numbers are placed 
// alternatively

// notes
    // solution 1
        // create two arrays, positive and negative. split the original array 
         // into the positive and negative array 
        // O(n)

const arr = [-1, 4, 2, -9, 5, 12, -63, 2, -8, 3];

const solution = (arr) => {
    const posNums = [];
    const negNums = [];
    while(arr.length != 0) {
        const currNum = arr.pop();
        if(currNum > 0) posNums.push(currNum);
        else if(currNum < 0) negNums.push(currNum);
    }
    const solutionArr = new Array(arr.length);

    let p = 0;  // iterator for posNums
    let n = 0;  // iterator for negNums
    let s = 0;  // iterator for solutionArr
    // input elements in alternating order
    while(p < posNums.length && n < negNums.length) {
        if(s % 2 === 0) {   // positive for even index
            solutionArr[s] = posNums[p];
            p++;
        } 
        else {
            solutionArr[s] = negNums[n];
            n++;
        }
        s++;
    }
    // if there are still positive numbers
    while(p < posNums.length) {
        solutionArr[s] = posNums[p];
        s++;
        p++;
    }
    // if there are still negative numbers
    while(n < negNums.length) {
        solutionArr[s] = negNums[n];
        s++;
        n++;
    }
    return solutionArr;
}

console.log(`arr: ${arr}`);
console.log(`alternating + and -: ${solution(arr)}`);