// problem: merge two sorted arrays
// notes
    // solution 1
        // create a third solution array while comparing both push in the 
         // smaller element
        // since they are both sorted, then it will be sorted
        // O(n1 + n2)

const arr1 = [0, 1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 8, 9, 10];

const solution = (arr1, arr2) => {
    const solutionLength = arr1.length + arr2.length;
    const solutionArr = new Array(solutionLength);

    let i1 = 0; // iterator for arr1
    let i2 = 0; // iterator for arr2
    let s = 0;  // iterator for solutionArr

    // push in smaller of two elements in arrays
    while(i1 < arr1.length && i2 < arr2.length) {
        if(arr1[i1] <= arr2[i2]) {
            solutionArr[s] = arr1[i1];
            i1++;
        }
        else if(arr1[i1] > arr2[i2]) {
            solutionArr[s] = arr2[i2];
            i2++;
        }
        s++;
    }
    // if arr1 still has elements
    while(i1 < arr1.length) {
        solutionArr[s] = arr1[i1];
        s++;
        i1++;
    }
    // if arr2 still has elements
    while(i2 < arr2.length) {
        solutionArr[s] = arr2[i2];
        s++;
        i2++;
    }
    return solutionArr;
}

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
console.log(`Merged: ${solution(arr1, arr2)}`);
