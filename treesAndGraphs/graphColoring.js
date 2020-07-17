class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {
  // Create a valid coloring for the graph

  //iterate through the graph
  //if the node's neighbor contains current node...throw error (Graph is a loop)
    graph.forEach(node => {
    if (node.neighbors.has(node)) {
      throw new Error(`Legal coloring impossible for node with loop: ${node.label}`);
    }

    // Get the node's neighbors' colors, as a set so we
    // can check if a color is illegal in constant time
    const illegalColors = new Set();
    //iterate through current node's neighbors
    node.neighbors.forEach(neighbor => {
      //if the neighbor's color is not null
      if (neighbor.color !== null) {

        illegalColors.add(neighbor.color);
      }
    });

    // Assign the first legal color
    //iterate over the colors array
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      //if illegalColors doesn't have current color
      if (!illegalColors.has(color)) {
        //assign current node's color as current color
        node.color = color;
        break;
      }
    }
  });

}



// Tests
const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

let graph = [];
{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  const nodeD = new GraphNode('D');
  nodeA.neighbors.add(nodeB);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeC.neighbors.add(nodeB);
  nodeC.neighbors.add(nodeD);
  nodeD.neighbors.add(nodeC);
  graph = [nodeA, nodeB, nodeC, nodeD];
}
colorGraph(graph, colors);
console.log(validateGraphColoring(graph));


function validateGraphColoring(graph) {

  const maxDegree = Math.max(...graph.map(node => node.neighbors.size));

  const colorsUsed = new Set();

  graph.forEach(node => {
    colorsUsed.add(node.color);
  });

  if (colorsUsed.has(null)) {
    return false;
  }

  if (colorsUsed.size > maxDegree + 1) {
    return false;
  }

  let badEdges = 0;

  graph.forEach(node => {
    node.neighbors.forEach(neighbor => {
      if (neighbor.color === node.color) {
        badEdges += 1;
      }
    });
  });

  if (badEdges > 0) {
    return false;
  }

  return true;
}