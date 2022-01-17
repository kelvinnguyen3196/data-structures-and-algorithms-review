module.exports.testSorting = (lists, sortingFunc) => {
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