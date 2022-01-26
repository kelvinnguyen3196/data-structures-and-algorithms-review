// problem: evalute postfix expression using a stack
// notes
    // solution 1: use a stack

const exp = `231*+9-`
const solution = (exp) => {
    const expArr = exp.split(``);
    const stack = [];
    while(expArr.length > 0) {
        const currElem = expArr.shift();
        if(currElem === `+` || currElem === `-` || currElem === `*` ||
        currElem === `/`) {
            const top1 = Number(stack.pop());
            const top2 = Number(stack.pop());
            switch(currElem) {
                case(`+`):
                    stack.push(top1 + top2);
                    break;
                case(`-`):
                    stack.push(top1 - top2);
                    break;
                case(`*`):
                    stack.push(top1 * top2);
                    break;
                case(`/`):
                    stack.push(top1 / top2);
                    break;
            }
            continue;
        }
        // otherwise the element is a number
        stack.push(currElem);
    }
    console.log(stack);
}

solution(exp);