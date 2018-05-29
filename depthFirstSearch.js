/*
  Input/Output
    Input: Tree
    Output: Integer of minimum sales path
    
    
  Ideas:
    Idea 1:
      DFS Traverse the whole tree
        At each node return min sales path
        
        
  PseudoCode:
  
    Recursive function
      if node has no children return its cost
      else 
        return current cost + min of all children
    
  
    Examples:
    
    
              0
          1        2
        1  
         
         
      rootNode: 0
      currentMin: 1

*/


function getCheapestCost(rootNode) {
  // your code goes here
  if(!rootNode.children.length) return rootNode.cost
  else {
    let currentMin = Infinity; // *
    for(let child of rootNode.children) {
      let sum = getCheapestCost(child)
      if(sum < currentMin) currentMin = sum
    }
    return currentMin + rootNode.cost;
  }
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

let zero = new Node(0)
let five = new Node(5)
let one = new Node(1)

zero.children.push(five)
zero.children.push(one)

console.log(getCheapestCost(zero))



