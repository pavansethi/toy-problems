// Tree
// Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

// Help this person finish their tree by adding in the missing code for these methods.

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node)
}
treeMaker.methods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  var found = false;

  function traverse(node) {
      for (var i = 0; i < node.children.length; i++) {
          if (node.children[i].value === target) {
              found = true;
          } else {
              traverse(node.children[i]);
          }
      }
  }

  traverse(this)
  
  return found;
}