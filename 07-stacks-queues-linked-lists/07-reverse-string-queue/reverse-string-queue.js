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

module.exports = Queue;


const reverseStringWithQueue = (str) => {
    const queueStr = new Queue()
    for (let i = str.length - 1; i >= 0; i--) {
        queueStr.enqueue(str[i])
    }
    let resultString = ''

    while(!queueStr.isEmpty()) {
        resultString += queueStr.dequeue()
    }
    return resultString
};

module.exports = reverseStringWithQueue;
