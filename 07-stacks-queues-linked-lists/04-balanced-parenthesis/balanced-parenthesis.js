class Stack {
    constructor() {
        this.maxSize = 100;
        this.stack = [];
        this.top = -1;
    }

    push(value) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;

        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.maxSize - 1;
    }
}

function balancedParenthesis(str) {
    const stack = new Stack();
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === '(') stack.push(str[i]);
        if (str[i] === ')' && !stack.pop()) return false;
    }
    return stack.top === - 1;
}

console.log(balancedParenthesis(''))

module.exports = balancedParenthesis;
