// problem: find the first non-repeating integers in an array
// notes
    // solution 1
        // sort and find element i and next element j where i !== j
        // O(nlogn)
    // solution 2
        // keep arr, v, that keeps track of current non-repeating integer
            // v will be a queue (FIFO) to keep order
        // insert elements into a hashmap with element as key and index as value
            // if element is first time insertion then update v
            // if element already exists
                // remove element from v
        // return v
        // O(n^2)
            // because for each elem inserted need to look through v to see if 
             // exists
    // solution 3
        // traverse arr and insert into hashmap with element as key and number 
         // of appearances as value
        // traverse arr and access map value, return first elem where value = 1
        // O(n)

// const arr = [1, 2, 3, 2, 1, 4, 5]
const arr = [0, -1, 230, -200, -1, 230, 4, 5, 0];

const solution = (arr) => {
    const map = new Map();

    arr.forEach((elem) => {
        map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
    });

    for(let i = 0; i < arr.length; i++) {
        if(map.get(arr[i]) === 1) return arr[i];
    }
}

console.log(`Arr: ${arr}`);
console.log(`First non-repeating element: ${solution(arr)}`);