function inOrder(node) {

  var result = [];
  
  function traverse(node) {
  
    if (node.left) {
      traverse(node.left);
    }
    
    result.push(node.data);
    
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(node)
  return result;
}

function preOrder(node) {
  var result = [];
  
  function traverse(node) {

    result.push(node.data);
  
    if (node.left) {
      traverse(node.left);
    }
    
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(node)
  return result;
}

function postOrder(node) {
  var result = [];
  
  function traverse(node) {
  
    if (node.right) {
      traverse(node.right);
    }

    result.push(node.data);
    
    if (node.left) {
      traverse(node.left);
    }
  }
  traverse(node)
  return result;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var a = new Node(5);
var b = new Node(10);
var c = new Node(2);
a.left = b;
a.right = c;

preOrder(a);
