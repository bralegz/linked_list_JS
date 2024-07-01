function printList() {
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
}

export default printList;