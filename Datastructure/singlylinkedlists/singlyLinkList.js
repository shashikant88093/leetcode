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
  shift(){
  if(!this.head) return undefined
  let newHead = this.head
  this.head = newHead.next
  this.length--
  if(this.length ==0){
   this.tail = null
  }
  // console.log(this.head)
  return newHead
  }
  unshift(val){
  let newNode = new Node(val);
   if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      newNode.next = this.head;
      this.head = newNode;
      }
    this.length++
    return this
  }
  get(index){
   if(index < 0 || index >= this.length) return null;
   let counter = 0
   let current = this.head
   while(counter != index){
     current = current.next;
     counter++
   }
   return current
  }
  set(index,val){
  let foundNode = this.get(index)
  if(foundNode){
    foundNode.val = val
    return true
  }
  return false
  }
  insert(index,val){
  if(index < 0 || index > this.length) return false
  if(index === this.length) return !!is.push(val)
  if(index === 0) return !!is.unshift(val)
  let newNode = new Node(val)
  let prev = this.get(index - 1)
  let temp = prev.next
  prev.next = temp
  this.length++
  return true
  
  }
  remove(index){
  if(index <0 || index >= this.length) return undefined;
  if(index === 0) return this.shift()
  if(index === this.length - 1) return this.pop();
  let previousNode = this.get(index -1)
  let removed = previousNode.next = removed.next;
  ltis.length--
  return removed
   
  }
  print(){
  let arr = []
  let current = this.head
  while(current){
   arr.push(current.val)
   current = current.next
  }
  console.log(arr)
  }
  
}

let first = new SingleLinkList();
first.push("hi");
first.push("shashikant");
first.push("kumar");



