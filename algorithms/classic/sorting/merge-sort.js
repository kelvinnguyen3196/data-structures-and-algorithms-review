const merge = (arr, left, mid, right) => {
    const leftSize = mid - left + 1;    // + 1 because left arr includes middle
    const rightSize =  right - mid;
    let tempLArr = [];
    let tempRArr = [];
    for(let i = 0; i < leftSize; i++) {
        tempLArr.push(arr[left + i]);
    }
    for(let i = 0; i < rightSize; i++) {
        tempRArr.push(arr[mid + 1 + i]);    // + 1 for right offset
    }
    // start merging
    let l = 0; // starting index of tempLArr
    let r = 0; // starting index of tempRArr
    let a = left;   // starting index of arr
    while(l < leftSize && r < rightSize) {
        if(tempLArr[l] <= tempRArr[r]) {
            arr[a] = tempLArr[l];
            l++;
        }
        else if(tempLArr[l] > tempRArr[r]) {
            arr[a] = tempRArr[r];
            r++;
        }
        a++;
    }
    while(l < leftSize) {   // in case there are left over elems in left arr
        arr[a] = tempLArr[l];
        l++;
        a++;
    }
    while(r < rightSize) {  // in case there are left over elems in right arr
        arr[a] = tempRArr[r];
        r++;
        a++;
    }
}

const mergeSort = (arr, left, right) => {
    if(left >= right) return;   // reached size 1
    const mid = Math.floor((right + left) / 2);
    // keep dividing in half
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    // once start comparisons and merging
    merge(arr, left, mid, right);
    return arr;
}

const testingSort = require(`./test-sorting.js`);
testingSort.testSorting(mergeSort);