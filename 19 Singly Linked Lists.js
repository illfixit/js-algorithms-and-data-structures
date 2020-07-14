/*       SINGLY LINKED LISTS       */

/*       Intro to Singly Linked Lists       */

//    What is a linked list?
//
// A data structure that contains a head, tail
//  and length property.
// Linked Lists consist of nodes, and each node
//  has a value and a pointer to another node
//  or null.

//  head  length=4  tail
//   ^______________ ^
//  ||              ||
//   4 -> 6 -> 8 -> 2

// Comparisons with Arrays

//   Lists

// * Do not have indexes!
// * Connected via nodes with a next pointer
// * Random access is not allowed

//   Arrays

// * Indexed in order!
// * Insertion and deletion can be expensive
// * Can quickly be accessed at a specific index

/*       Starter Code and Push Intro       */

(() => {
  // // Node - piece of data, that reference to next nod
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // // var first = new Node("Hi");
  // // first.next = new Node("there")
  // // first.next.next = new Node("how")
  // // first.next.next.next = new Node("are")
  // // first.next.next.next.next = new Node("you")
  // class SinglyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //   push(val) {
  //     // some code
  //   }
  // }
  // var list = new SinglyLinkedList();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // console.log(list);
})();

//   Push method
// (Adding a new node to the end of the Linked List)!

//   Pushing pseudocode

// * This function should accept a value
// * Create a new node using the value passed
//    to the function
// * If there is no head property on the list,
//    set the head and tail to be the newly
//    created node
// * Otherwise set the next property on the
//    tail to be the new node and set the tail
//    property on the list to be the newly
//    created node
// * Increment the length by one.

/*       Singly Linked List Push Solution       */

(() => {
  // // Node - piece of data, that reference to next nod
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // class SinglyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //   // // My push function implementation. Works perfectly
  //   // push(val) {
  //   //   let node = new Node(val);
  //   //   if (this.length === 0) {
  //   //     this.head = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   } else if (this.length >= 1) {
  //   //     this.tail.next = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   }
  //   // }
  //   // Author's push function implementation.
  //   push(val) {
  //     var newNode = new Node(val);
  //     if (!this.head) {
  //       this.head = newNode;
  //       this.tail = this.head;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //     this.length++;
  //     return this;
  //   }
  // }
  // var list = new SinglyLinkedList();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // console.log(list);
  // // > SinglyLinkedList {
  // // >   head: Node { val: 'HELLO', next: Node { val: 'HI', next: [Node] } },
  // // >   tail: Node { val: 'GOODBYE', next: null },
  // // >   length: 3
  // // > }
})();

/*       Singly Linked List Pop Intro       */

//     Popping
// Removeing a node from the end of the Linked List!

// Node - piece of data, that reference to next node

(() => {
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // class SinglyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //   // // My push function implementation. Works perfectly
  //   // push(val) {
  //   //   let node = new Node(val);
  //   //   if (this.length === 0) {
  //   //     this.head = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   } else if (this.length >= 1) {
  //   //     this.tail.next = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   }
  //   // }
  //   // My pop function implementation. Works perfectly
  //   pop() {
  //     if (this.length > 1) {
  //       let node = this.head;
  //       while (node.next != this.tail) {
  //         node = node.next;
  //       }
  //       this.tail = node;
  //       let poped = this.tail.next;
  //       this.tail.next = null;
  //       this.length--;
  //       return poped;
  //     } else {
  //       this.tail = null;
  //       this.head = null;
  //       this.length = 0;
  //       return undefined;
  //     }
  //   }
  //   // Author's push function implementation.
  //   push(val) {
  //     var newNode = new Node(val);
  //     if (!this.head) {
  //       this.head = newNode;
  //       this.tail = this.head;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //     this.length++;
  //     return this;
  //   }
  // }
  // var list = new SinglyLinkedList();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // console.log(list);
  // console.log(list.pop());
  // console.log(list);
  // console.log(list.pop());
  // console.log(list);
  // console.log(list.pop());
  // console.log(list);
  // console.log(list.pop());
  // console.log(list);
  // list.push("HI Y'All");
  // console.log(list);
  // // Output:
  // // SinglyLinkedList {
  // //   head: Node { val: 'HELLO', next: Node { val: 'HI', next: [Node] } },
  // //   tail: Node { val: 'GOODBYE', next: null },
  // //   length: 3
  // // }
  // // Node { val: 'GOODBYE', next: null }
  // // SinglyLinkedList {
  // //   head: Node { val: 'HELLO', next: Node { val: 'HI', next: null } },
  // //   tail: Node { val: 'HI', next: null },
  // //   length: 2
  // // }
  // // Node { val: 'HI', next: null }
  // // SinglyLinkedList {
  // //   head: Node { val: 'HELLO', next: null },
  // //   tail: Node { val: 'HELLO', next: null },
  // //   length: 1
  // // }
  // // undefined
  // // SinglyLinkedList { head: null, tail: null, length: 0 }
  // // undefined
  // // SinglyLinkedList { head: null, tail: null, length: 0 }
  // // SinglyLinkedList {
  // //   head: Node { val: "HI Y'All", next: null },
  // //   tail: Node { val: "HI Y'All", next: null },
  // //   length: 1
  // // }
})();

//   Popping pseudocode
//
// * If there are no nodes in the list,
//    return undefined
// * Loop through the list until you
//    reach the tail
// * Set the next property of the 2nd
//    to last node to be null
// * Set the tail to be the 2nd to last
//    node
// * Decrement the length of the list by 1
// * Return the value of the node removed

/*       Singly Linked List Pop Solution       */

(() => {
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // class SinglyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //   // // My push function implementation. Works perfectly
  //   // push(val) {
  //   //   let node = new Node(val);
  //   //   if (this.length === 0) {
  //   //     this.head = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   } else if (this.length >= 1) {
  //   //     this.tail.next = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   }
  //   // }
  //   // Author's push function implementation.
  //   push(val) {
  //     var newNode = new Node(val);
  //     if (!this.head) {
  //       this.head = newNode;
  //       this.tail = this.head;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //     this.length++;
  //     return this;
  //   }
  //   // // My pop function implementation. Works perfectly
  //   // pop() {
  //   //   if (this.length > 1) {
  //   //     let node = this.head;
  //   //     while (node.next != this.tail) {
  //   //       node = node.next;
  //   //     }
  //   //     this.tail = node;
  //   //     this.tail.next = null;
  //   //     this.length--;
  //   //     // return this;
  //   //   } else {
  //   //     this.tail = null;
  //   //     this.head = null;
  //   //     this.length = 0;
  //   //     return this; // return undefined
  //   //   }
  //   // }
  //   // Author's pop function implementation.
  //   pop() {
  //     if (!this.head) return undefined;
  //     var current = this.head;
  //     var newTail = current;
  //     while (current.next) {
  //       newTail = current;
  //       current = current.next;
  //     }
  //     this.tail = newTail;
  //     this.tail.next = null;
  //     this.length--;
  //     if (this.length === 0) {
  //       this.head = null;
  //       this.tail = null;
  //     }
  //     return current;
  //   }
  // }
  // var list = new SinglyLinkedList();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // console.log(list);
  // console.log(listlist.pop());
  // console.log(list);
  // console.log(listlist.pop());
  // console.log(list);
  // console.log(listlist.pop());
  // console.log(list);
  // console.log(listlist.pop());
  // console.log(list);
  // list.push("HI Y'All");
  // console.log(list);
})();

/*       Singly Linked List Shift Intro       */

//   Shifting
// Removing a new node from the beginning of
//   the Linked List

/*       Singly Linked List Shift Solution       */

// Shifting Pseudocode

// * If there are no nodes, return undefined
// * Store the current head property in a variable
// * Set the head property to be the current head's
//    next property
// * Decrement by length by 1
// * Return the value of the node removed

(() => {
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // class SinglyLinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //   // // My push function implementation. Works perfectly
  //   // push(val) {
  //   //   let node = new Node(val);
  //   //   if (this.length === 0) {
  //   //     this.head = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   } else if (this.length >= 1) {
  //   //     this.tail.next = node;
  //   //     this.tail = node;
  //   //     this.length++;
  //   //   }
  //   // }
  //   // Author's push function implementation.
  //   push(val) {
  //     var newNode = new Node(val);
  //     if (!this.head) {
  //       this.head = newNode;
  //       this.tail = this.head;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //     this.length++;
  //     return this;
  //   }
  //   // // My pop function implementation. Works perfectly
  //   // pop() {
  //   //   if (this.length > 1) {
  //   //     let node = this.head;
  //   //     while (node.next != this.tail) {
  //   //       node = node.next;
  //   //     }
  //   //     this.tail = node;
  //   //     this.tail.next = null;
  //   //     this.length--;
  //   //     // return this;
  //   //   } else {
  //   //     this.tail = null;
  //   //     this.head = null;
  //   //     this.length = 0;
  //   //     return this; // return undefined
  //   //   }
  //   // }
  //   // Author's pop function implementation.
  //   pop() {
  //     if (!this.head) return undefined;
  //     var current = this.head;
  //     var newTail = current;
  //     while (current.next) {
  //       newTail = current;
  //       current = current.next;
  //     }
  //     this.tail = newTail;
  //     this.tail.next = null;
  //     this.length--;
  //     if (this.length === 0) {
  //       this.head = null;
  //       this.tail = null;
  //     }
  //     return current;
  //   }
  //   // * If there are no nodes, return undefined
  //   // * Store the current head property in a variable
  //   // * Set the head property to be the current head's
  //   //    next property
  //   // * Decrement by length by 1
  //   // * Return the value of the node removed
  //   // // My shift function implementation. Works perfectly
  //   // shift() {
  //   //   if (!this.head) return undefined;
  //   //   let temp = this.head;
  //   //   this.head = this.head.next;
  //   //   this.length--;
  //   //   return temp;
  //   // }
  //   // Author's shift function implementation.
  //   shift() {
  //     if (!this.head) return undefined;
  //     var currentHead = this.head;
  //     this.head = currentHead.next;
  //     this.length--;
  //     if (this.length === 0) {
  //       this.tail = null;
  //     }
  //     return currentHead;
  //   }
  // }
  // var list = new SinglyLinkedList();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // list.pop();
  // list.pop();
  // list.pop();
  // list.push('HELLO');
  // list.push('HI');
  // list.push('GOODBYE');
  // console.log(list.shift());
  // console.log(list.shift());
  // console.log(list.shift());
  // console.log(list.shift());
  // // output:
  // // Node {
  // //   val: 'HELLO',
  // //   next: Node { val: 'HI', next: Node { val: 'GOODBYE', next: null } }
  // // }
  // // Node { val: 'HI', next: Node { val: 'GOODBYE', next: null } }
  // // Node { val: 'GOODBYE', next: null }
  // // undefined
})();

/*       Singly Linked List Unshift Intro       */

// Unshifting:
// Adding a new node to the beginning
//  of the Linked List!

// Unshifting Pseudocode:
//
// * This function should accept a value
// * Create a new node using the value passed
//    to the function
// * If there is no head property on the list,
//    set the head and tail to be the newly
//    created node.
// * Otherwise set the newly created node's next
//    property to be the current head
// * Set the head property on the list to be that
//    newly created node
// * Increment the length of the list by 1
// * Return the linked list

(() => {
  //   function unshift(val) {
  //     var newNode = new Node(val);
  //     if (!head) {
  //       this.head = newNode;
  //       this.tail = this.head;
  //     }
  //     newNode.next = this.head;
  //     this.head = newNode;
  //     this.length++;
  //     return this;
  //   }
})();

/*       Singly Linked List Get Intro       */

//     Get
//
// Retrieving a node by it's position in the Linked List

//     Get pseudocode
//
// * This function should accept an index
// * If the index is less than zero or
//    greater or equal to the length of
//    the list, return null or undefined
// * Loop through the list until you reach
//    the index and return the node at that
//    specific index

/*       Singly Linked List Get Solution       */

(() => {
  // function get(index) {
  //   if (index < 0 || index >= this.length) {
  //     return undefined;
  //   }
  //   let counter = 0;
  //   let current = this.head;
  //   while (counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   return current;
  // }
})();

/*       Singly Linked List Set Intro       */

//     Set
//
//   Changing the value of a node based on it's
//    position in the Linked List

//     Set pseudocode
//
// * This function should accept a value and an
//    index
// * Use your get function to find the specific node
// * If the node is not found, return false
// * If the node is found, set the valu of that node
//    to be the value passed to the function and
//    return true

/*       Singly Linked List Set Solution       */

(() => {
  // function set(index, value) {
  //   var foundNode = this.get(index);
  //   if(foundNode) {
  //     foundNode.val = val;
  //     return true;
  //   }
  //   return false;
  // }
})();
