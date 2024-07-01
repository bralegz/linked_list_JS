import Node from "../classes/Node.js";

function append(value) {
  const newNode = new Node(value);

  if (this.length === 0) {
    this.head = newNode;
    this.tail = this.head;
    this.length++;
    return this;
  }

  let currentNode = this.head;

  for (let i = 0; i < this.length; i++) {
    if (currentNode.next) {
      //if next node exists move to next node
      currentNode = currentNode.next;
    } else {
      // if next node doesn't exists then set the new node as the next node
      currentNode.next = newNode;
      this.tail = currentNode.next;
      this.length++;
    }
  }

  return this;
}

export default append;