class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  toString() {
    return `Node: ${this.data.toString()}`;
  }

  type() {
    return typeof this.data;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (data instanceof Array) {
      for (const value of data) {
        this.insertLast(value);
      }
    }
  }

  // Returns the length
  size() {
    return this.length;
  }

  // Returns the head
  head() {
    return this.head?.data || null;
  }

  // Returns the tail
  tail() {
    return this.tail?.data || null;
  }

  // Return if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Insert first node to list
  insertFirst(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      node.next = this.head;
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    node.next = this.head;
    this.head = node;
    this.length++;
    return;
  }

  // Insert a node at to end of list
  insertLast(element) {
    // check if its the first element
    if (!this.head) {
      return this.insertFirst(element);
    }

    const node = new Node(element);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return;
  }

  // Add a node at a specified index
  insertAt(index, element) {
    // check if index is out of bounds of list
    if (index > this.length || index < 0) {
      throw new RangeError("Out of Range index");
    }

    // insert node to beginning
    if (index === 0) {
      return this.insertFirst(element);
    }

    // insert node to end
    if (index === this.length) {
      return this.insertLast(element);
    }

    const newNode = new Node(element);
    const previous = this.elementAt(index - 1);
    const after = previous.next;
    previous.next = newNode;
    newNode.next = after;
    this.length++;
    return;
  }

  // Removes the first node of the list
  deleteFirst() {
    if (!this.head) {
      throw new Error("List Underflow");
    }

    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    const node = this.head;
    this.head = node.next;
    this.length--;
    return node.data;
  }

  // Removes the last node of the list
  deleteLast() {
    if (!this.tail) {
      throw new Error("List Underflow");
    }

    if (this.length === 1) {
      const node = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    let current = this.head;
    let newTail = null;

    while (current) {
      // checks if current is second to last element
      if (!current.next.next) {
        newTail = current;
      }
      current = current.next;
    }

    const node = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return node.data;
  }

  // Removes a given node from the list
  delete(element) {
    if (this.isEmpty()) {
      throw new Error("List Underflow");
    }

    if (element === this.head) {
      return this.deleteFirst();
    }

    if (element === this.tail()) {
      return this.deleteLast();
    }

    const index = this.indexOf(element);
    const previous = this.elementAt(index - 1);
    const node = previous.next;
    const after = previous.next.next;
    previous.next = after;
    this.length--;
    return node.data;
  }

  // Returns index of node in list, if present
  indexOf(element) {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.length === 1 && element === this.head) {
      return 0;
    }

    if (element === this.tail) {
      return this.length - 1;
    }

    let target = element;
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (target === current) {
        return i;
      }
      current = current.next;
    }

    // return -1 if element not present
    return -1;
  }

  // Return value stored at given index
  elementAt(index) {
    if (index >= this.length || index < 0) {
      throw new RangeError("Out of Range index");
    }

    let node = this.head;

    if (index === 0) {
      return node;
    }

    for (let i = 1; i <= index; i++) {
      node = node.next;
    }

    return node;
  }

  // Set value of a node at a particular index to new given value
  setAt(index, val) {
    const node = this.elementAt(index);
    node.data = val;
    return;
  }

  // Returns a reference to middle node of linked list
  findMiddle() {
    // if there are two middle nodes, return the second middle node
    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  // Empty the list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Returns an array copy of linked list
  toArray() {
    const arr = [];

    if (this.isEmpty()) {
      return arr;
    }

    if (this.length === 1) {
      arr.push(this.head);
      return arr;
    }

    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  // Reverses the current list
  reverse() {
    if (this.isEmpty() || this.length === 1) {
      return;
    }

    let headNode = this.head;
    this.head = this.tail;
    this.tail = headNode;

    let prev = null;
    let next = null;

    while (headNode) {
      next = headNode.next;
      headNode.next = prev;
      prev = headNode;
      headNode = next;
    }
  }
}

export { Node, LinkedList };
