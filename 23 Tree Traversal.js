/* <<< TREE TRAVERSAL >>>

VISIT EVERY NODE ONCE

*         10
*      /     \
*    19       6
*   /  \      \
* 99    8      20


TRAVERSING A TREE
Two ways:
(1) Breadth-first Search
(2) Depth-first Search


BREADTH FIRST SEARCH

* ----------> 10
*          /     \
* ------> 6 ---> 15
*       /  \      \
* --> 3 --> 8 --> 20


BREADTH FIRST SEARCH
Steps - Iteratively

* (1) Create a queue (this can be an array) and a variable
*      to store the values of nodes visited
* (2) Place the root node in the queue
* (3) Loop as long as there is anything in the queue
*   (3a) Dequeue a node from the queue and push the value 
*         of the node into the variable that stores the nodes
*   (3b) If there is a left property on the node dequeued 
*         - add it to the queue
*   (3c) If there is a right property on the node dequeued
*         - add it to the queue
* (4) Return the variable that stores the values

(()=>{
  class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
})()


DEPTH FIRST SEARCH

DFS - InOrder

*        (4) 10 
*         /    \
*    (2) 6     15 (5)
*      /  \      \ 
* (1) 3    8 (3)  20 (6)

DFS - InOrder
Steps - Recursively

* (1) Create a variable to store the values of
*      nodes visited
* (2) Store the root of the BST in a variable 
*      called current
* (3) Write a helper function which accepts a node
*  (3a) If the node has a left property, call the 
*        helper function with the left property 
*        on the node
*  (3b) Push the value of the node to the variable 
*        that stores the values
* (3c) If the node has a right property, call the 
*       helper function with the right property
*       on the node
* (4) Invoke the helper function with the current
*      variable
* (5) Return the array of values

DFS - PreOrder

*        (1) 10 
*         /    \
*    (2) 6     15 (5)
*      /  \      \ 
* (3) 3    8 (4)  20 (6)


* DFS - PreOrder
* (1) Create a variable to store the values of nodes visited
* (2) Store the root of the BST in a variable called current
* (3) Write a helper function which accepts a node
*   (3a) Push the value of the node to the variable
*         that stores the values
*   (3b) If the node has a left property, call the helper 
*         function with the left property on the node
*   (3c) If the node has a right property, call the helper 
*         function with the right property on the node
* (4) Invoke the helper function with the current variable
* (5) Return the array of values

DFS - PostOrder

*           10  (6)
*         /    \
*    (3) 6     15 (5)
*      /  \      \ 
* (1) 3    8 (2)  20 (4)


* DFS - PostOrder
* (1) Create a variable to store the values of nodes visited
* (2) Store the root of the BST in a variable called current
* (3) Write a helper function which accepts a node
*   (3a) If the node has a left property, call the 
*         helper function with the left property on the node
*   (3b) If the node has a right property, call the helper 
*         function with the right property on the node
*   (3c) Push the value of the node to the variable that 
*         stores the values
*   (3d) Invoke the helper function with the current variable
* (4) Return the array of values

(()=>{
  class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
})()

DFS - InOrder
Used commonly with BST's (Binary Search Trees)

Notice we get all nodes in the tree in their underlying order

DFS - PreOrder
Can be used to "export" a tree structure so that it is easily reconstructed or copied.

* RECAP
* Trees are non-linear data structures that contain a root 
*  and child nodes
* Binary Trees can have values of any type, but at most two 
*  children for each parent
* Binary Search Trees are a more specific version of binary
*  trees where every node to the left of a parent is less 
*  than it's value and every node to the right is greater
* We can search through Trees using BFS and DFS

Removing a Node in a BST
This one can be tough!

Removing a Node - 0 children
Steps - Iteratively

* (1) Find the parent of the node that needs to be 
*      removed and the node that needs to be removed
* (2) If the value we are removing is greater than 
*      the parent node
*  (2a) Set the right property of the parent to be null
* (3) If the value we are removing is less than the 
*      parent node​
*  (3a) Set the left property of the parent to be null
* (4) Otherwise, the node we are removing has to be the 
*      root, so set the root to be null


Removing a Node - 1 child
Steps - Iteratively

* (1) Find the parent of the node that needs to be
*      removed and the node that needs to be removed
* (2) See if the child of the node to be removed is
*      on the right side or the left side
* (3) If the value we are removing is greater than 
*      the parent node​​
* (3a) Set the right property of the parent to be the child
* (4) If the value we are removing is less than the 
*      parent node​
* (4a) Set the left property of the parent to be the child
* (5) Otherwise, set the root property of the tree 
*      to be the child


Removing a Node - 2 children
Steps - Iteratively

* (1) Find the parent of the node that needs to be removed 
*     and the node that needs to be removed
* (2) Find the predecessor node and store that in a variable
* (3) Set the left property of the predecessor node to be 
*     the left property of the node that is being removed
* (4) If the value we are removing is greater than the 
*     parent node​​
*   (4a) Set the right property of the parent to be the right 
*     property of the node to be removed
* (5) If the value we are removing is less than the parent 
*     node​
*   (5a) Set the left property of the parent to be the right 
*     property of the node to be removed
* (6) Otherwise, set the root of the tree to be the right 
*     property of the node to be removed

*/
