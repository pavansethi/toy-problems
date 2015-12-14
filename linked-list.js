// Linked List
// Implement a linked-list

var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function (initialValue) {
  this.tail = null;
  this.head = null;
  var node = new Node()
};


LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
  } else if (this.tail !== null) {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  if (this.head.value === this.tail.value) {
    this.tail = null;
  }
  var removed = this.head.value;
  this.head = this.head.next;
}

LinkedList.prototype.contains = function(target) {
  var found = false;
  
  function traverse(node) {
    if (node.value === target) {
      found = true;
    }

    if (node.next) {
      traverse(node.next)
    }
  }
  traverse(this.head);
  return found;
}