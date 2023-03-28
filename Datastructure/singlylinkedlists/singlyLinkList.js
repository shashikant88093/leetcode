//representing link list bad way

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
        newTail =current
        current = current.next
    }
    // console.log(newTail)
    // console.log(current)
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length ===0) {
        this.head = null
        this.tail = null
    }
    return current


  }
}

let first = new SingleLinkList();
first.push("hi");
first.push("shashikant");
first.push("kumar");
first.pop()
first.pop()

console.log(first);
