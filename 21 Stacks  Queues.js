/*       STACKS  QUEUES       */

/*       Intro to Stacks       */

/* OBJECTIVES

1) Define what a stack is
2) Understand use cases for a stack
3) Implement operations on a stack data structure


WHAT IS A STACK?
- A LIFO data structure!
- The last element added to the stack will be the first element removed from the stack

HOW IS IT USED?
- Like a stack of plates, or a stack of markers, or a stack of....anything.
As we pile it up the last thing (or the topmost thing) is what gets removed first.

*
*   last   size=4   first
*      _______________
*     |               | 
* <- 10 <- 2 <- 22 <- 7
*

WHERE STACKS ARE USED
+ Managing function invocations (call stack)
+ Undo / Redo
+ Routing (the history object) is treated like a stack! */

/*       Creating a Stack with an Array       */

/* THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
1) ARRAY IMPLEMENTATION (easiest way) */

(() => {
  // var stack = []
  // stack.push("google")
  // stack.push("instagram")
  // stack.push("youtube")
  // stack.pop(); // "youtube"
  // stack.unshift("create new file")
  // stack.unshift("resize file")
  // stack.unshift("cloned out wrinkle")
  // stack.shift(); // "cloned out wrinkle"
  // // push() and pop() are much more efficient
})();

/*       Writing Our Own Stack From Scratch       */

/* THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
 
2) LINKED LIST IMPLEMENTATION (better way)

* A STACK CLASS
* class Stack {
*     constructor(){
*         this.first = null;
*         this.last = null;
*         this.size = 0;
*     }
* }
* class Node {
*     constructor(value){
*         this.value = value;
*         this.next = null;
*     }
* }


* Push and Pop in Stack are supposed to be constant time.
* But that's not the case. Much better way is to use some-
*  thing similar to shift and unshift but call them push 
*  and pop.

PUSHING
Add a value to the top of the stack!

PUSHING PSEUDOCODE
* (1) The function should accept a value
* (2) Create a new node with that value
* (3) If there are no nodes in the stack, set the first and last property to be the newly created node 
* (4) If there is at least one node, create a variable that stores the current first property on the stack
* (5) Reset the first property to be the newly created node
* (6) Set the next property on the node to be the previously created variable
* (7) Increment the size of the stack by 1

POP
Remove a value from the top of the stack!

POP PSEUDOCODE
* (1) If there are no nodes in the stack, return null
* (2) Create a temporary variable to store the first property on the stack
* (3) If there is only 1 node, set the first and last property to be null
* (4) If there is more than one node, set the first property to be the next property on the current first
* (5) Decrement the size by 1
* (6) Return the value of the node removed
*/

(() => {
  //   class Node {
  //     constructor(value){
  //         this.value = value;
  //         this.next = null;
  //     }
  // }
  // class Stack {
  //     constructor(){
  //         this.first = null;
  //         this.last = null;
  //         this.size = 0;
  //     }
  //     push(val){
  //         var newNode = new Node(val);
  //         if(!this.first){
  //             this.first = newNode;
  //             this.last = newNode;
  //         } else {
  //             var temp = this.first;
  //             this.first = newNode;
  //             this.first.next = temp;
  //         }
  //         return ++this.size;
  //     }
  //     pop(){
  //         if(!this.first) return null;
  //         var temp = this.first;
  //         if(this.first === this.last){
  //             this.last = null;
  //         }
  //         this.first = this.first.next;
  //         this.size--;
  //         return temp.value;
  //     }
  // }
})();

/*       BIG O of Stacks       */

/*

BIG O of STACKS
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(N)

RECAP
* (1) Stacks are a LIFO data structure where the last value in is always the first one out.
* (2) Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
* (3) They are not a built in data structure in JavaScript, but are relatively simple to implement
* (4) Insert and remove are both O(1)

*/

//*********************************************************//

/*       Intro to Queues       */

/*
QUEUES

OBJECTIVES
* Define what a queue is
* Understand use cases for a queue
* Implement operations on a queue data structure

WHAT IS A QUEUE?
- A FIFO data structure!
- First In First Out

WE'VE SEEN THIS BEFORE
- Queues exist everywhere! 
- Think about the last time you waited in line....

How do we use them in programming?

> Background tasks
> Uploading resources
> Printing / Task processing

*/

/*       Creating Queues Using Arrays       */

/*        Writing Our Own Queue From Scratch       */

/* A Queue Class
*
* class Queue {
*     constructor(){
*         this.first = null;
*         this.last = null;
*         this.size = 0;
*     }
* }
* class Node {
*     constructor(value){
*         this.value = value;
*         this.next = null;
*     }
* }
* 

*
*    last   size=4   first
*      _______________
*     |               | 
* <- 10 <- 2 <- 22 <- 7
*

/* BUILDING A QUEUE WITH AN ARRAY */

/* Enqueue
- Adding to the beginning of the Queue!
- Remember, queues are a FIFO data structure

Enqueue Pseudocode
(1) This function accepts some value
(2) Create a new node using that value passed to the function
(3) If there are no nodes in the queue, set this node to be the first and last property of the queue
(4) Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
(5) Increment the size of the queue by 1

Dequeue
- Removing from the beginning of the Queue!

(!) Remember, queues are a FIFO data structure

Dequeue pseudocode
(1) If there is no first property, just return null
(2) Store the first property in a variable
(3) See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
(4) If there is more than 1 node, set the first property to be the next property of first 
(5) Decrement the size by 1
(6) Return the value of the node dequeued
*/

(() => {
  //   class Node {
  //     constructor(value){
  //         this.value = value;
  //         this.next = null;
  //     }
  // }
  // class Queue {
  //     constructor(){
  //         this.first = null;
  //         this.last = null;
  //         this.size = 0;
  //     }
  //     enqueue(val){
  //         var newNode = new Node(val);
  //         if(!this.first){
  //             this.first = newNode;
  //             this.last = newNode;
  //         } else {
  //             this.last.next = newNode;
  //             this.last = newNode;
  //         }
  //         return ++this.size;
  //     }
  //     dequeue(){
  //         if(!this.first) return null;
  //         var temp = this.first;
  //         if(this.first === this.last) {
  //             this.last = null;
  //         }
  //         this.first = this.first.next;
  //         this.size--;
  //         return temp.value;
  //     }
  // }
})();

/*       BIG O of Queues       */

/* BIG O of QUEUES
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(N)

RECAP
* Queues are a FIFO data structure, all elements are first in first out.
* Queues are useful for processing tasks and are foundational for more complex data structures
* Insertion and Removal can be done in O(1) 
*/
