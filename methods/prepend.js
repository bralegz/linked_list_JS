import Node from "../classes/Node.js";

function prepend(value) {
  const newNode = new Node(value);

  if (this.length === 0) {
    this.head = newNode;
    this.tail = this.head;
    this.length++;
    return this;
  }

  const oldList = this.head;

  this.head = newNode;
  this.head.next = oldList;
  this.length++;
}

export default prepend;
