// problem: find symmetric pairs in an array
// given an array of pairs find all symmetric pairs in it. it may be assumed 
 // that all the first elements of all pairs are unique
// two pairs (a, b) and (c, d) are said to be symmetric if c is equal to b and a
 // is equal to d. For example, (10, 20) and (20, 10) are symmetric
// notes
    // solution 1
    // traverse all pairs
        // when we get to a pair, we check a hash table to see if the second 
         // element exists in the table (key)
        // if it does not exist in the table yet, we add it into the hash table 
         // with the first elem as the key and the pair as the value
        // if it exists then we can add both pairs to an array that we will 
         // return at the end
        // O(n) run time and O(n) space

class Pair {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    // #region getters
    get x() {
        return this.#x;
    }
    
    get y() {
        return this.#y;
    }
    // #endregion
}

const solution = (pairArr) => {
    const pairMap = new Map();
    const symmertricPairs = [];

    pairArr.forEach((elem) => {
        if(pairMap.has(elem.y)) {   // if second elem exists in map
            // if pair in map's second elem is same as current pair's first elem
            if(pairMap.get(elem.y).y === elem.x) {
                symmertricPairs.push({
                    one: pairMap.get(elem.y),
                    two: elem
                });
            }
        }
        pairMap.set(elem.x, elem);
    }); 

    return symmertricPairs;
}

const formatPairs = (pairs) => {
    let formattedString = '\n';
    pairs.forEach((elem) => {
        formattedString += `(${elem.x}, ${elem.y})\n`;
    });
    formattedString = formattedString.substring(0, formattedString.length - 1);
    return formattedString;
}

const formatSymmetricPairs = (arr) => {
    let formattedString = '\n';
    arr.forEach((elem) => {
        formattedString += `[(${elem.one.x}, ${elem.one.y}), (${elem.two.x}, ${elem.two.y})]\n`;
    });
    formattedString = formattedString.substring(0, formattedString.length - 2);
    return formattedString;
}

const pairs = [];
pairs.push(new Pair(11, 20));
pairs.push(new Pair(30, 40));
pairs.push(new Pair(5, 10));
pairs.push(new Pair(40, 30));
pairs.push(new Pair(10, 5));
console.log(`Here is the list of pairs: ${formatPairs(pairs)}`);
const symmetricPairs = solution(pairs);
console.log(`Here is the list of symmetric pairs: ${formatSymmetricPairs(symmetricPairs)}`);