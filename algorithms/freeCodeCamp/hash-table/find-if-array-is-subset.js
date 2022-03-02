// problem: find if an array is a subset of another array
// given two arrays arr1 and arr2, find whether arr2 is a subset of arr1 or not.
 // both arrays are not in sorted order. it may be assumed that elements in both
 // array are distinct

// notes
    // solution 1: hashing
        // insert all elements of arr1 into a hash table
        // traverse elements of arr2 and check if it exists in hash table
            // if element does not exist return false
        // if all elements from arr2 exist in hash table return true

const solution = (arr1, arr2) => {
    const arr1Map = new Map();
    // insert all elements of arr1 into hash table
    arr1.forEach((elem) => {
        arr1Map.set(elem, true);
    });
    // traverse elements of arr2
    let subset = true;  // assume arr2 is subset unless proven otherwise
    for(let i = 0; i < arr2.length; i++) {
        if(!arr1Map.has(arr2[i])) {
            subset = false;
            break;
        }
    }
    return subset;
}

const arr1 = [[11, 1, 13, 21, 3, 7], [1, 2, 3, 4, 5, 6], [10, 5, 2, 23, 19]];
const arr2 = [[11, 3, 7, 1], [1, 2, 4], [19, 5, 3]];

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
    console.log(`arr2 ${subset} a subset of arr1\n`);
}