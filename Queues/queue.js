class Node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.lenght === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.lenght++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return 'Se borró el primer elemento del queue';
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;

    return this;
  }
}

const myQueue = new Queue();
