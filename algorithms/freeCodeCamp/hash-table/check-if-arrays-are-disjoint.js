// problem: check if given arrays are disjoint
// disjoint meaning that both arrays have no elements in common
// notes
    // solution 1: hash table
        // insert elements of arr1 into a hash table
        // traverse elements of arr2 and check if they exist in hash table
            // if there exists an element then return false (not disjoint)
        // if after all elements are check and they do not share, return true
        // O(n + m) runtime where n is size of arr1 and m is size of arr2
        // O(n) space

const solution = (arr1, arr2) => {
    const arr1Map = new Map();
    // add arr1 elements into hash map
    arr1.forEach((elem) => {
        arr1Map.set(elem, true);
    });
    // traverse arr2 and check if they exist
    let disjoint = true;  // initially assume true unless otherwise determined
    for(let i = 0; i < arr2.length; i++) {
        if(arr1Map.has(arr2[i])) {
            disjoint = false;
            break;
        }
    }
    return disjoint;
}

const arr1 = [[11, 1, 13, 21, 3, 7], [1, 2, 3, 4, 5, 6], [10, 5, 2, 23, 19], [3, 6, 19, 0, 15]];
const arr2 = [[11, 3, 7, 1], [1, 2, 4], [19, 5, 3], [5, 10, 83, 4]];

const formatArr = (arr) => {
    let formattedString = `[`;
    arr.forEach((elem) => {
        formattedString += `${elem}, `;
    });
    formattedString = formattedString.substring(0, formattedString.length - 2);
    formattedString += `]`;
    return formattedString;
}

for(let i = 0; i < arr1.length; i++) {
    console.log(`arr1: ${formatArr(arr1[i])}`);
    console.log(`arr2: ${formatArr(arr2[i])}`);
    const subset = solution(arr1[i], arr2[i]) ? `is` : `is not`;
    console.log(`arr2 ${subset} disjoint from arr1\n`);
}