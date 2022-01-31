// problem: generate binary numbers from 1 to n using a queue
// notes
    // solution 1
        // 1, 10, 11, 100, 101, 110, 111, 1000, etc
        // start with [1]
        // loop through queue backwards
            // first 0 turns to 1 and previous elems turn to 0
        // if all elems in queue are 1
            // change all 1 to 0 except queue[0] 
            // enqueue 0
        
const solution = (n) => {
    const queue = [1];
    console.log(queue.join());
    for(let i = 0; i < n - 1; i++) {
        let tracker = queue.length - 1;
        let allOnes = true;
        while(tracker >= 0) {
            if(queue[tracker] === 0) {
                queue[tracker] = 1;
                for(let i = tracker + 1; i < queue.length; i++) {
                    queue[i] = 0;
                }
                allOnes = false;
                break;
            }
            tracker--;
        }
        if(allOnes) {
            for(let i = 1; i < queue.length; i++) {
                queue[i] = 0;
            }
            queue.push(0);
        }
        console.log(queue.join(``));
    }
}

solution(15);