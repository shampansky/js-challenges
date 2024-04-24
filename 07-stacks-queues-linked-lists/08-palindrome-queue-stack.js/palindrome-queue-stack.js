class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    enqueue(element) {
        if (this.isFull()) {
            return false;
        }
        this.queue[this.tail] = element;
        this.tail++;
        return true;
    }

    dequeue() {
        const item = this.queue[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.queue[this.head];
    }

    getLength() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.getLength() === 0;
    }

    isFull() {
        return this.getLength() === this.maxSize;
    }
}

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

module.exports = Stack;


function isPalindromeQueueStack(str) {
    const preparedString = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const stack = new Stack(preparedString)
    const queue = new Queue(preparedString)

    for (let i = 0; i < preparedString.length; i++) {
        const letter = preparedString.charAt(i)
        stack.push(letter)
        queue.enqueue(letter)
    }

    let stackString = ''
    let queueString = ''

    while (!queue.isEmpty()) {
        if (queue.dequeue() !== stack.pop()) {
            return false
        }
    }

    return true
}


module.exports = isPalindromeQueueStack;
