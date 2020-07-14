class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree
  const stack = [];
  stack.push({
    node: treeRoot,
    loweBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  });
  
  while (stack.length){
    const { node, lowerBound, upperBound } = stack.pop();
    
    if (node.value <= lowerBound || node.value >= upperBound){
      return false;
    }
    
    if (node.left) {
      stack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      });
    }
      
    if (node.right) {
      stack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      });
    }
  }

  return true;
}

// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
console.log(isBinarySearchTree(treeRoot));

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
console.log(isBinarySearchTree(treeRoot));