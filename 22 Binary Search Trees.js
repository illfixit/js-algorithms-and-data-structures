/*       BINARY SEARCH TREES       */

/*       Introduction to Trees      */

/* TREES

OBJECTIVES
* Define what a tree is
* Compare and contrast trees and lists
* Explain the differences between trees, binary trees, and binary search trees
* Implement operations on binary search trees

WHAT IS A TREE?
A data structure that consists of nodes in a parent / child relationship
       
*       ______2______     
*      /  /  / \     \      
*     9 12  8  99    10     
*    / /|\    / \   / \    
*   2 1 7 2 44  11 55 87   


(!) Lists - linear
(!) Trees - nonlinear

A Singly Linked List
(sort of a special case of a tree)

* Tree
*   2
*    \    Singly Linked List
*    12     2 -> 12 -> 11
*     \
*     11

* Not a tree
*       ______ 2 ______     
*      /    /    \     \      
*     9 -> 8 -> 99 -> 10 

* Not a tree
*        2 ____ 8 ______     
*      /     /    \     \      
*     9 -> 7 -> 99 -> 10 

TREE TERMINOLOGY
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

*/

/*        Uses For Trees        */

/* 
Trees have lots of different applications!

HTML DOM
Network Routing
Abstract Syntax Tree
Artificial Intelligence
Folders in Operating Systems
Computer File Systems
*/

/*       Intro to Binary Trees       */

/* 
KINDS OF TREES
(>) Trees
(>) Binary Trees
(>) Binary Search Trees


BINARY TREES

*         1
*      /    \
*     5     12
*   /  \     \
* 6     3    11

NOT A BINARY TREE

*         1
*      /  |  \
*     5   9  12
*   /  \      \
* 6     3     11

BINARY TREES

Lots of different applications as well!

(+) Decision Trees (true / false)
(+) Database Indicies
(+) Sorting Algorithms

BINARY SEARCH TREES

*         10
*      /     \
*     6      15
*   /  \      \
* 3     8      20

HOW BSTS WORK

(>) Every parent node has at most two children
(>) Every node to the left of a parent node is always less than the parent
(>) Every node to the right of a parent node is always greater than the parent

* Non-valid BST
*         10
*      /     \
*     8      15
*   /  \      \
* 3     6      20
*


* Non-valid BST
*         10
*      /  |  \
*     8   4  15
*   /         \
* 3           20
*  \
*   6


* Non-valid BST
*            10
*         /     \
*        8      15
*      /         \
*     3          20
*   /  \
* 4     6

/*       Our Tree Classes       */

/*
* The BinarySearchTree Class
* class BinarySearchTree {
*     constructor(){
*         this.root = null;
*     }
* }
* class Node {
*     constructor(value){
*         this.value = value;
*         this.left = null;
*         this.right = null;
*     }
* }
*
* var tree = new BinarySearchTree();
* tree.root = new Node(10);
* tree.root.right = new Node(15);
* tree.root.left = new Node(7);
* tree.root.left.right = new Node(9);
*

/*       BTS Insert       */

/* INSERTING
*
*         10     <- 13
*      /     \
*     6      15
*   /  \      \
* 3     8      20

*         10    
*      /      \
*     6       15
*   /  \     /  \
* 3     8  13   20

  INSERTING A NODE
( Steps - Iteratively or Recursively )

* (1) Create a new node
* (2) Starting at the root
*  (2.1) Check if there is a root, if not - 
*        the root now becomes that new node!
*  (2.2) If there is a root, check if the value
*        of the new node is greater than or less
*        than the value of the root
*  (2.3) If it is greater: 
*    (2.3a) Check to see if there is a node to the right
*      (2.3aa) If there is, move to that node and repeat
*               these steps
*      (2.3ab) If there is not, add that node as the 
*               right property
*   (2.4) If it is less:
*     (2.4a) Check to see if there is a node to the left
*       (2.4aa) If there is, move to that node and repeat
*                these steps
*       (2.4ab) If there is not, add that node as the 
*                left property

*/

(()=>{
//   class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }
// }

// //      10
// //   5     13
// // 2  7  11  16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
})();

/*
  Finding a Node in a BST
( Steps - Iteratively or Recursively )

Starting at the root: 
(1) Check if there is a root, if not - we're done 
     searching!
(2) If there is a root, check if the value of the
      new node is the value we are looking for. 
      If we found it, we're done!
(3) If not, check to see if the value is greater 
     than or less than the value of the root
(4) If it is greater: 
  (4.1) Check to see if there is a node to the right
    (4.1a) If there is, move to that node and repeat
            these steps
    (4.1b) If there is not, we're done searching!
(5) If it is less: 
  (5.1) Check to see if there is a node to the left
    (5.1a) If there is, move to that node and repeat 
            these steps
     (5.1b) If there is not, we're done searching!

*/

(()=>{
//   class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
//     contains(value){
//         if(this.root === null) return false;
//         var current = this.root,
//             found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             } else if(value > current.value){
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }


// //      10
// //   5     13
// // 2  7  11  16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
})()

/*        Big O of Binary Search Tree        */

/*
Big O of BST
Insertion - O(log n)
Searching - O(log n)
NOT guaranteed!

Double the number of nodes...
- You only increase the number of steps to 
   insert/find by 1

2x number of nodes: 1 extra step
4x number of nodes: 2 extra steps
8x number of nodes: 3 extra steps

THIS IS A VALID BINARY SEARCH TREE

* 3
*  \
*  17
*   \
*   19
*    \
*    32
*     \
*     34
*      \
*      63
*       \
*       86
*        \
*        91
