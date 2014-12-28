// http://www.codewars.com/kata/53223653a191940f2b000877/train/javascript

// In this kata, you'll have to implement a function solve_graph(start, end, arcs) that will return true if the end node can be reached from the start node, using 0 or more arcs. It will return false if it is not possible.

// The graph is defined by a list of arcs, where each arc is an object that has two properties, start and end, representing the start and end nodes, respectively. Each arc is unidirectional, in other words it goes from a start node to an end node, and not the other way around. Note that 0 or more arcs can leave a node, and 0 or more can arrive to it. If you need more info on the way these graphs work, you can see there : http://en.wikipedia.org/wiki/Adjacency_list and there : http://en.wikipedia.org/wiki/Directed_graph

// Note that the solve_graph() method doesn't take a list of nodes as input: for simplicity's sake, let's assume that all nodes present in arcs are valid. However, the start or end node may not be in arcs.

// Let's take a simple example :

// var arcs = [
// { start : "a", end : "b" },
// { start : "a", end : "a"}
// ];

// solve_graph("a", "b", arcs);
// // Should return true, because "b" can be reached from "a"

// solve_graph("a", "c", arcs);
// // Should return false, because "c" can never be reached from "a", using any combination of arcs


// breadth first solution
function solve_graph(start, end, arcs) {
  if(start === end) { return true; }
  
  var currentList = [start];
  var nextList = [];
  var found = false;
  var dead = {};

  while(currentList.length > 0) {
    var node = currentList.pop();
    if(!dead[node]) {
      found = arcs.some(function(arc) {
        if(arc.start === node) {
          if(arc.end === end) { return true; }
          nextList.push(arc.end);
        }
      });
    }

    if(found) { return true; }

    dead[node] = true;
    if(currentList.length === 0 && nextList.length > 0) {
      currentList = nextList.slice(0);
      nextList = [];
    }
  }

  return false;
};

// depth first solution
function solve_graph(start, end, arcs) {
  if(start === end) { return true; }

  var dead = {};
  var recurse = function(node) {
    dead[node] = true;
    return arcs.some(function(arc) {
      if(arc.end === end) { return true; }
      if(arc.start === node && !dead[arc.end]) { return recurse(arc.end); }
    })
  };

  return recurse(start);
};
