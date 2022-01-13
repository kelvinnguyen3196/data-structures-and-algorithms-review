// problem: find the second minimum element of an array
// notes
    // solution 1: brute force
        // linear search for smallest element
        // linear search for smallest element that is not smallest ^
        // O(n)
    // solution 2: sorting
        // sort list then get element at length - 2
        // O(nlogn)
    // solution 3: linear
        // search through list once keeping track of two smallest numbers
        // O(n)
            // big O same, but slightly better than solution 1 b/c only one pass

// const arr = [501, 39, 4, 1, 0, -1];
const arr = [];
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) - 50);
}

const solution = (arr) => {
    let smallOne = Number.MAX_VALUE;
    let smallTwo = Number.MAX_VALUE;
    arr.forEach((elem) => {
        if(elem < smallOne) {
            smallTwo = smallOne;
            smallOne = elem;
        }
        else if(elem < smallTwo) {
            smallTwo = elem;
        }
    });
    return Math.max(smallOne, smallTwo);
}

console.log(`Arr: ${arr}`);
console.log(`Sorted arr: ${arr.sort((f, s) => f - s)}`);
console.log(`Second minimum element: ${solution(arr)}`);