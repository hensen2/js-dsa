export default class Queue {
  constructor(data = []) {
    this.queue = data;
    this.head = 0;
    this.tail = this.queue.length - 1; // set to -1 if empty
  }

  enqueue(element) {
    this.queue.push(element);
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    let val = this.queue[this.head];
    this.head++;
    return val;
  }

  isEmpty() {
    return this.tail === -1;
  }

  head() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }

  tail() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.tail];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.head = 0;
    this.tail = -1;
    this.queue = [];
  }

  toArray() {
    return this.queue;
  }

  toString() {
    return this.queue.toString();
  }
}
