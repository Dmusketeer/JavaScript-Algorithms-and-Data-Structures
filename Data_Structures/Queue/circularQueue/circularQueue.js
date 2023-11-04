class circularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = -1; //front pointer
    this.rear = -1; // rear pointer
    this.size = 0; // current size
  }

  //cheack if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // check if the queue is full
  isFull() {
    return this.size === this.capacity;
  }

  // enqueue an element
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.size += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
    }
  }
}

// Example usage of the CircularQueue class
const cq = new circularQueue(5);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);

console.log(cq.dequeue()); // Output: 1
console.log(cq.peek()); // Output: 2
console.log(cq.getSize()); // Output: 3
