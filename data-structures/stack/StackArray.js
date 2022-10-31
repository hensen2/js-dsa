export default class Stack {
  constructor(data = []) {
    this.stack = data;
    this.top = 0;
  }

  push(element) {
    this.stack.push(element);
    this.top += 1;
  }

  pop() {
    if (this.top !== 0) {
      this.top -= 1;
      return this.stack.pop();
    }
    throw new Error("Stack Underflow");
  }

  peek() {
    if (this.top !== 0) {
      return this.stack[this.top - 1];
    }
    return null;
  }

  isEmpty() {
    return this.top === 0;
  }

  size() {
    return this.top;
  }

  clear() {
    this.stack = [];
  }

  toArray() {
    return this.stack;
  }

  toString() {
    return this.stack.toString();
  }
}
