// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function getPath(graph, startNode, endNode) {

  // Find the shortest route in the network between the two users
  //edge cases, if startNode & endNode is not a property of graph, return null
  if(!graph.hasOwnProperty(startNode)){
    throw new Error('start node not in graph');
  }
  if(!graph.hasOwnProperty(endNode)){
    throw new Error('end node not in graph');
  }
  
  //create a new queue to hold nodes to check
  const nodesToCheck = new Queue();
    //enqueue start node
  nodesToCheck.enqueue(startNode);
  
  //create a object to track how we reached the endNode
  const howToReachEndNode = {};
  //assign startNode with value null to tracking object
  howToReachEndNode[startNode] = null;
  //while queue size is not 0
  while(nodesToCheck.size > 0){
    //assign currentNode as dequeue value
    let currentNode = nodesToCheck.dequeue();
    //if currentNode equals endNode
    if(currentNode === endNode){
      //pass tracking object into a function that creates an array out of the property and values
      return generateArray(howToReachEndNode, startNode, endNode)
    }
    //iterate over graph at current object's values
    graph[currentNode].forEach(number => {
      //if tracking object doesn't have property of current element
      if(!howToReachEndNode.hasOwnProperty(number)){
        // push current element into queue
        nodesToCheck.enqueue(number)
        // assign tracking obeject's key of current element to currentNode
        howToReachEndNode[number] = currentNode;
      }
    })
  }
  return null;
}

function generateArray(nodesToEnd, start, end) {
  //create array to hold nodesToEnd elements
  const nodesToEndInReverse = [];
  //assign currentNode var as end
  let currentNode = end
  //while currentNode is not null
  while(currentNode !== null){
    //push current node into array
    nodesToEndInReverse.push(currentNode)
    currentNode = nodesToEnd[currentNode]
    //currentNode = nodesToEnd[currentNode]
  }
  return nodesToEndInReverse.reverse()
  //return array.reverse() <--- since array is being filled in from end to start  
}




// Tests
const graph = {
  'a': ['b', 'c', 'd'],
  'b': ['a', 'd'],
  'c': ['a', 'e'],
  'd': ['a', 'b'],
  'e': ['c'],
  'f': ['g'],
  'g': ['f']
};

let desc = 'two hop path 1';
let actual = getPath(graph, 'a', 'e');
let expected = ['a', 'c', 'e'];
assertDeepEqual(actual, expected, desc);

desc = 'two hop path 2';
actual = getPath(graph, 'd', 'c');
expected = ['d', 'a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 1';
actual = getPath(graph, 'a', 'c');
expected = ['a', 'c'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 2';
actual = getPath(graph, 'f', 'g');
expected = ['f', 'g'];
assertDeepEqual(actual, expected, desc);

desc = 'one hop path 3';
actual = getPath(graph, 'g', 'f');
expected = ['g', 'f'];
assertDeepEqual(actual, expected, desc);

desc = 'zero hop path';
actual = getPath(graph, 'a', 'a');
expected = ['a'];
assertDeepEqual(actual, expected, desc);

desc = 'no path';
actual = getPath(graph, 'a', 'f');
expected = null;
assertDeepEqual(actual, expected, desc);

desc = 'start node not present';
assertThrowsError(() => {
  getPath(graph, 'h', 'a');
}, desc);

desc = 'end node not present';
assertThrowsError(() => {
  getPath(graph, 'a', 'h');
}, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}