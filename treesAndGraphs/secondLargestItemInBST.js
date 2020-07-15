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

function findSecondLargest(treeRoot) {

  // Find the second largest item in the binary search tree
  if(!treeRoot.left && !treeRoot.right){
    throw new Error('not enough nodes')
  }
  
  const stack = []
  stack.push(treeRoot.value)
  
  const helper = (node) => {
    if(node.value === null){
      return
    }
    stack.push(node.value)
    if(node.left){
      helper(node.left)
    }
    if(node.right){
      helper(node.right)
    }
  }
  helper(treeRoot)
  stack.sort((a,b) => {
    return a - b
  })
  return stack[stack.length - 2]
}


// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
console.log(findSecondLargest(treeRoot));

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
console.log(findSecondLargest(treeRoot));