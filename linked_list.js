class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (!this.head) {
      // check if node is empty
      this.head = new node(value);
      return this;
    }
    let tail = this.getTail();
    tail.next = new node(value);
    return tail;
  }
  prepend(value) {
    if (!this.head) {
      // check if node is empty
      this.head = new node(value);
      return this;
    }
    const prevHead = this.head;
    this.head = new node(value, prevHead);
  }
  getTail() {
    if (!this.head) return null; // check if node is empty
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }
}
