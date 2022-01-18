module.exports.testSorting = (sortingFunc) => {
    const lists = [
        [4, 3, 1, -1, 0, 50, 10],
        [1, 0],
        [6, 5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5, 6]
    ];
    lists.forEach((list, idx) => {
        const sorted = [...list].sort((a, b) => a - b); // deep clone with spread
        const mySorted = sortingFunc(list);
        // verify solution
        let workingSort = true;
        for(let i = 0; i < sorted.length; i++) {
            if(sorted[i] !== mySorted[i]) {
                workingSort = false;
                break;
            }
        }
        console.log(`List ${idx}: ${workingSort ? `PASSED` : `FAILED`}`);
        console.log(`\tBuilt in sort function: ${sorted}`);
        console.log(`\tMy sort function: \t${mySorted}`);
    });
}