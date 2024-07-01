import append from "../methods/append.js";
import printList from "../methods/printList.js";
import prepend from "../methods/prepend.js";

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

  searchNode(value) {

  }

  insert = (value, position) => {};

  reverse = () => {};

  printList() {
    printList.call(this);
  }
}

export default Linked_List;

