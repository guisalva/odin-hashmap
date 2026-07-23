class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  prepend(key, value) {
    const newNode = new Node(key, value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  update(key, value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  size() {
    let currentNode = this.head;
    let length = 0;

    while (currentNode) {
      length++;

      currentNode = currentNode.nextNode;
    }

    return length;
  }

  getHead() {
    if (!this.head) return undefined;

    return this.head;
  }

  getTail() {
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.nextNode) return currentNode;

      currentNode = currentNode.nextNode;
    }

    return undefined;
  }

  at(index) {
    let currentNode = this.head;
    let listIndex = 0;

    while (currentNode) {
      if (listIndex === index) return currentNode;

      currentNode = currentNode.nextNode;
      listIndex++;
    }

    return undefined;
  }

  pop() {
    let currentNode = this.head;

    if (currentNode) {
      this.head = currentNode.nextNode;

      return currentNode.value;
    }

    return undefined;
  }

  contains(key) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) return true;

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  findKey(key) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) return currentNode;

      currentNode = currentNode.nextNode;
    }

    return undefined;
  }

  findIndex(key) {
    let currentNode = this.head;

    let index = 0;
    while (currentNode) {
      if (currentNode.key === key) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    while (currentNode) {
      string += `( ${currentNode.key}: ${currentNode.value} )`;

      currentNode.nextNode ? (string += " -> ") : (string += " -> null");

      currentNode = currentNode.nextNode;
    }

    return string;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError();
    }

    if (values.length === 0) return;

    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;

      currentIndex++;
    }

    let firstInserted = null;
    let lastInserted = null;

    for (const value of values) {
      const newNode = new Node(value);

      if (!firstInserted) {
        firstInserted = newNode;
      } else {
        lastInserted.nextNode = newNode;
      }

      if (previousNode) {
        previousNode.nextNode = newNode;
      }

      lastInserted = newNode;
    }

    lastInserted.nextNode = currentNode;

    if (previousNode) {
      previousNode.nextNode = firstInserted;
    } else {
      this.head = firstInserted;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError();
    }

    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;

      currentIndex++;
    }

    if (previousNode) {
      previousNode.nextNode = currentNode.nextNode;
    } else {
      this.head = currentNode.nextNode;
    }
  }

  remove(key) {
    let previousNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.key === key) break;

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = currentNode.nextNode;
      return true;
    } else {
      this.head = currentNode.nextNode;
      return true;
    }

    return false;
  }
}
