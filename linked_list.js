import append from "./methods/append.js";
import printList from "./methods/printList.js";
import prepend from "./methods/prepend.js";

class Linked_List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    append.call(this, value);
  }

  prepend(value) {
    prepend.call(this, value);
  }

  insert = (value, position) => {};

  reverse = () => {};

  printList() {
    printList.call(this);
  }
}

const ll = new Linked_List();

ll.append(9);
ll.append(12);
ll.append(15);
ll.append(10);
ll.append(2);
ll.prepend(200);
ll.prepend(300);


ll.printList();
