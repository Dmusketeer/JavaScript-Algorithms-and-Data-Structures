class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}

// Example usage of the Queue class
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1 (dequeued)
console.log(queue.front()); // Output: 2 (front element)
console.log(queue.rear()); // Output: 3 (rear element)
console.log(queue.size()); // Output: 2 (number of elements in the queue)
console.log(queue.isEmpty()); // Output: false (whether the queue is empty)
