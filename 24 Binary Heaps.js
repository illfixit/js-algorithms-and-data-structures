/*       BINARY HEAPS       */

/* BINARY HEAPS

OBJECTIVES
 
(1) Define what a binary heap is
(2) Compare and contrast min and max heaps
(3) Implement basic methods on heaps
(4) Understand where heaps are used in the real world and what other data structures can be constructed from heaps 

WHAT IS A BINARY HEAP?
Very similar to a binary search tree, but with 
some different rules!

In a MaxBinaryHeap, parent nodes are always 
larger than child nodes. 

In a MinBinaryHeap, parent nodes are always 
smaller than child nodes

* BINARY HEAP
*
*         41
*      /      \ 
*    39       33
*   /  \     /
* 18   27  12
* 
* [41, 39, 33, 18, 27, 12]

* NOT A BINARY HEAP
*
*         33
*      /     \ 
*    18      41
*   /  \    /
* 12   27 39

MAX BINARY HEAP
(+) Each parent has at most two child nodes
(+) The value of each parent node is always greater than its child nodes
(+) In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
(+) A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

(No Implied Ordering Between Siblings)


(!) Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
(!) They are also used quite a bit, with graph traversal algorithms


THERE'S AN EASY WAY OF STORING A BINARY HEAP...
A LIST/ARRAY

REPRESENTING A HEAP

For any index of an array n...
(~) The left child is stored at 2n + 1
(~) The right child is at 2n + 2

WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
- For any child node at index n
   Its parent is at index (n-1)/2 (floored)


* DEFINING OUR CLASS
* Class Name:
* 
*        MaxBinaryHeap
* 
* Properties:
* 
*        values = []

* Adding to a MaxBinaryHeap
*  (1) Add to the end
*                  + 55
*         41       > Add to the end
*      /      \    > Bubble up
*    39       33
*   /  \     /  \
* 18   27  12  (55)
*
* [41, 39, 33, 18, 27, 12, 55]
* 
* (2) Bubble Up
*
*         41       
*      /      \   
*    39      (55)
*   /  \     /  \
* 18   27  12   33
* 
* [41, 39, 55, 18, 27, 12, 33]
* 
* (3) Bubble Up
*
*        (55)       
*      /      \   
*    39       41
*   /  \     /  \
* 18   27  12   33
* 
* [55, 39, 41, 18, 27, 12, 33]

INSERT PSEUDOCODE
Push the value into the values property on the heap
Bubble the value up to its correct spot!

INSERT PSEUDOCODE
(1) Push the value into the values property on the heap
(2) Bubble Up:
(2.1) Create a variable called index which is the length of the values property - 1
(2.2) Create a variable called parentIndex which is the floor of (index-1)/2
(2.3) Keep looping as long as the values element at the parentIndex is less than the values element at the child index
(2.3a) Swap the value of the values element at the parentIndex with the value of the element property at the child index
(2.3b) Set the index to be the parentIndex, and start over!

*/

(() => {
  class MaxBinaryHeap {
    constructor() {
      this.values = [];
    }
    insert(element) {
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  }

  let heap = new MaxBinaryHeap();
  heap.insert(41);
  heap.insert(39);
  heap.insert(33);
  heap.insert(18);
  heap.insert(27);
  heap.insert(12);
  heap.insert(55);
})();

/* REMOVING FROM A HEAP

(Heap ExtractMax)

(1) Remove the root
(2) Replace with the most recently added
(3) Adjust (sift down)

*     Sink down 
* - The procedure for deleting the root from the heap 
* (effectively extracting the maximum element in a max-heap
* or the minimum element in a min-heap) and restoring the
* properties is called down-heap (also known as bubble-down,
* percolate-down, sift-down, trickle down, heapify-down, 
* cascade-down, and extract-min/max).

* Removing from a MaxBinaryHeap
*                  
*         41       > Remove the root
*      /      \    > Replace with the most recently added
*    39       33   > Adjust (sift down)
*   /  \     / 
* 18   27  12 
*
* [41, 39, 33, 18, 27, 12]
* 
* (1) Remove the root, swap 0 and length-1
*
*         12       
*      /      \   
*    39       33
*   /  \    
* 18   27  
* 
* [12, 39, 33, 18, 27]
* 
* (3) Bubble Down (sift down)
*
*         39       
*      /      \   
*    12       33
*   /  \    
* 18   27  
* 
* [39, 12, 33, 18, 27]
* 
* (4) Bubble Down (sift down)
*
*         39       
*      /      \   
*    27       33
*   /  \    
* 18   12  
* 
* [39, 27, 33, 18, 12]


REMOVING
(also called extractMax)

* (1) Swap the first value in the values property with the last one
* (2) Pop from the values property, so you can return the value at the end.
* Have the new root "sink down" to the correct spot...​
* (2.1) Your parent index starts at 0 (the root)
* (2.2) Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
* (2.3) Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
* (2.4) If the left or right child is greater than the element...swap. * If both left and right children are larger, swap with the largest child.
* (2.5) The child index you swapped to now becomes the new parent index.  
* (2.6) Keep looping and swapping until neither child is larger than the element.
* (2.7) Return the old root!

*/ (() => {
  class MaxBinaryHeap {
    constructor() {
      this.values = [];
    }
    insert(element) {
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element <= parent) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }

    extractMax() {
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
    }

    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  let heap = new MaxBinaryHeap();
  heap.insert(41);
  heap.insert(39);
  heap.insert(33);
  heap.insert(18);
  heap.insert(27);
  heap.insert(12);
  heap.insert(55);

  //   0  1  2  3  4  5  6
  // [55,39,41,18,27,12,33]

  heap.extractMax(); // 55
  // [41,39,33,18,27,12]
})(); /*

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BUILDING A PRIORITY QUEUE

WHAT IS A PRIORITY QUEUE?
- A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

A NAIVE VERSION
Use a list to store all elements

priority: 3; priority: 1; priority: 2; priority: 5; priority: 4; 

Iterate over the entire thing to find the highest priority element.


* Class Name:
*  PriorityQueue
* 
* Properties:
*  values = []

But also...
* Class Name:
*  Node
* 
* Properties:
*  val
*  priority

(!) Val doesn't matter.
(!) Heap is constructed using Priority

*         val: "pay bill"
*            priority: 1
*
* val: "walk dog"      val: "go out"
* priority: 2           priority: 3

Priority Queue

(>) Write a Min Binary Heap - lower number means higher priority.
(>) Each Node has a val and a priority.  Use the priority to build the heap.
(>) Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
(>) Dequeue method removes root element, returns it, and rearranges heap using priority.

*/

(() => {
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    // instead of insert
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element.priority >= parent.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
    // instead of extractMax
    dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }
    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }

  let ER = new PriorityQueue();
  ER.enqueue('common cold', 5);
  ER.enqueue('gunshot wound', 1);
  ER.enqueue('high fever', 4);
  ER.enqueue('broken arm', 2);
  ER.enqueue('glass in foot', 3);
})();

/*

MaxHeapify
Converting an array into a MaxBinaryHeap

(1) Create a new heap
(2) Iterate over the array and invoke your insert function
(3) return the values property on the heap

Heapsort

We can sort an array in O(n log n) time and O(1) space by making it a heap!

(1) Make the array a max heap (use maxHeapify)
(2) Loop over the array, swap the root node with last item in the array
(3) After swapping each item, run maxHeapify again to find the next root node
(4) Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again.
(5) Once you've run out of items to swap, you have a sorted array!



Big O of Binary Heaps
Insertion - O(log N)
Removal   - O(log N)
Search    - O(N)

RECAP
(+) Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
(+) Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
(+) With just a little bit of math, we can represent heaps using arrays!
*/
