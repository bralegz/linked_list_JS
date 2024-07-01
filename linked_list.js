

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked_List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append = (value) => {
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
  };

  prepend = (value) => {
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
    this.length++
  };

  insert = (value, position) => {
    
  };

  reverse = () => {};

  printList = () => {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += `${currentNode.value}`;
      if (currentNode.next !== null) {
        result += " -> ";
      }
      currentNode = currentNode.next;
    }
    console.log(result);
    console.log("tail:", this.tail);
    console.log("length:", this.length);
  };
}

const ll = new Linked_List();

ll.append(9);
ll.append(12);
ll.append(15);
ll.append(10);
ll.append(2);
ll.prepend(200);


ll.printList();