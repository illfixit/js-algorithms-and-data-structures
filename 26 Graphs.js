/* GRAPHS

OBJECTIVES
Explain what a graph is
Compare and contrast different types of graphs and their use cases in the real world
Implement a graph using an adjacency list
Traverse through a graph using BFS and DFS
Compare and contrast graph traversal algorithms

WHAT ARE GRAPHS
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

Graph is collection of 
> Nodes + Connections 

*      ( A )
*    /       \
* (B) ______ (E)
*  |          |
* (C) ______ (F)
*   \       /
*     ( D )

USES FOR GRAPHS
Social Networks
Location / Mapping
Routing Algorithms
Visual Hierarchy
File System Optimizations
EVERYWHERE!

Recommendations
"People also watched"
"You might also like..."
"People you might know"
"Frequently bought with"...


Borderlands 
{ 
...
(Space)
...
(Future)
...
...
(Sci-Fi)
...
(Guns)
...
...
}
Halo


TYPES OF GRAPHS

ESSENTIAL GRAPH TERMS
Vertex - a node
Edge - connection between nodes
Weighted/Unweighted - values assigned to distances between vertices
Directed/Undirected - directions assigned to distances between vertices

HOW DO WE STORE GRAPHS???

ADJACENCY MATRIX

-	A	B	C	D	E	F
A	0	1	0	0	0	1
B	1	0	1	0	0	0
C	0	1	0	1	0	0
D	0	0	1	0	1	0
E	0	0	0	1	0	1
F	1	0	0	0	1	0

ADJACENCY LIST
[
 [1,5],
 [0,2],
 [1,3],
 [2,4],
 [3,5],
 [4,0]
]

ADJACENCY LIST
{
  A: ["B", "F"],
  B: ["A", "C"],
  C: ["B", "D"],
  D: ["C", "E"],
  E: ["D", "F"],
  F: ["E", "A"]
}


DIFFERENCES & BIG O

|V| - number of vertices
|E| - number of edges

OPERATION	    ADJACENCY LIST	    ADJACENCY MATRIX
Add Vertex	       O(1)	​              O(|V^2|)
Add Edge	         O(1)               	O(1)
Remove Vertex	 O(|V| + |E|)	          ​O(|V^2|)
Remove Edge	      O(|E|)	              O(1)
Query	         O(|V| + |E|)	            O(1)
Storage	       O(|V| + |E|)	          ​O(|V^2|)

Adjacency List

Can take up less space (in sparse graphs)
Faster to iterate over all edges
Can be slower to lookup specific edge

VS.

Adjacency Matrix

Takes up more space (in sparse graphs)
Slower to iterate over all edges
Faster to lookup specific edge


What will we use?

- An Adjacency List
- An Adjacency List
- An Adjacency List
Why?
- Most data in the real-world tends to lend itself to sparser and/or larger graphs

ADDING A VERTEX
Write a method called addVertex, which accepts a name of a vertex
It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

g.addVertex("Tokyo")
 ||
 v
{
  "Tokyo": []
}

*/
(() => {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  }
})();
/* 

ADDING AN EDGE
This function should accept two vertices, we can call them vertex1 and vertex2
The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
Don't worry about handling errors/invalid vertices

{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}
 ||
 v
g.addEdge("Tokyo", "Dallas")
 ||
 v
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}
 ||
 v
g.addEdge("Dallas", "Aspen")
 ||
 v
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}
*/
(() => {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  let g = new Graph();
  g.addVertex('Dallas');
  g.addVertex('Tokyo');
  g.addVertex('Aspen');
})();
/*

REMOVING AN EDGE
This function should accept two vertices, we'll call them vertex1 and vertex2
The function should reassign the key of vertex1 to be an array that does not contain vertex2
The function should reassign the key of vertex2 to be an array that does not contain vertex1
Don't worry about handling errors/invalid vertices


REMOVING AN EDGE

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}
 ||
 V
g.removeEdge("Tokyo", "Dallas")
 ||
 v
{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}

*/
(() => {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  let g = new Graph();
  g.addVertex('Dallas');
  g.addVertex('Tokyo');
  g.addVertex('Aspen');
  g.addEdge('Dallas', 'Tokyo');
  g.addEdge('Dallas', 'Aspen');
})();
/*


REMOVING A VERTEX


The function should accept a vertex to remove
The function should loop as long as there are any other vertices in the adjacency list for that vertex
Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
delete the key in the adjacency list for that vertex

REMOVING A VERTEX

{
  "Tokyo": ["Dallas", "Hong Kong"],
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
  "Los Angeles": ["Hong Kong", "Dallas"]
}
 ||
 v
g.removeVertex("Hong Kong")
 ||
 v
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen","Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"]
}

*/
(() => {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  let g = new Graph();
  g.addVertex('Dallas');
  g.addVertex('Tokyo');
  g.addVertex('Aspen');
  g.addVertex('Los Angeles');
  g.addVertex('Hong Kong');
  g.addEdge('Dallas', 'Tokyo');
  g.addEdge('Dallas', 'Aspen');
  g.addEdge('Hong Kong', 'Tokyo');
  g.addEdge('Hong Kong', 'Dallas');
  g.addEdge('Los Angeles', 'Hong Kong');
  g.addEdge('Los Angeles', 'Aspen');
})();
