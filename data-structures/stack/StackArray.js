export default class Stack {
  constructor(data) {
    this.stack = data;
    this.top = this.stack.length - 1; // set to -1 if empty
  }

  push(element) {
    this.top++;
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
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

  size() {
    return this.stack.length;
  }

  clear() {
    this.top = -1;
    this.stack = [];
  }

  toArray() {
    return this.stack;
  }

  toString() {
    return this.stack.toString();
  }
}
