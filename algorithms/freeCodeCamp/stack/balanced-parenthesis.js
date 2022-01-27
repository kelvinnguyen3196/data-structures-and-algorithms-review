// problem: check balanced parenthesis in an expression

const exp = [`[(])`, `[()]{}{[()()]()}`];

const solution = (exp) => {
    const expArr = exp.split('');
    const stack = [];

    while(expArr.length !== 0) {
        const curr = expArr.shift();
        if(curr === `(` || curr === `[` || curr === `{`) {
            stack.push(curr);
            continue;
        }
        // otherwise pop from stack and check if they are the same
        const top = stack.pop();
        if(top === `(` && curr === `)` || top === `[` && curr === `]` ||
        top === `{` && curr === `}`) {
            continue;
        }
        return 'not balanced';
    }

    if(stack.length === 0) return 'balanced';
    return 'not balanced';
}

exp.forEach(elem => {
    console.log(`${elem} is ${solution(elem)}`);
});