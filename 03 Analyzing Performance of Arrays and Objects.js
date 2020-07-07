/*               Built-in Data Structures             */
//              Through the lens of Big O

// Objectives:

// > Understand how objects and arrays work,
//    through the lens of Big O

// >  Explain why adding elements to the beginning
//     of an array is costly

// > Compare and contrast the runtime for arrays
//    and objects, as well as built-in methods

// Objects. Unordered, key value pairs!

/*                The BIG O of Objects                */

// let instructor = {
//   firstName: 'Kelly',
//   isInstructor: true,
//   favoriteNumbers: [1, 2, 3, 4],
// }

// When to use objects:
// > When you don't need order
// > When you need fast access
//   or insertion and removal

// Objects:
//   Insertion  ->   O(1)
//   Removal    ->   O(1)
//   Searching  ->   O(n)
//   Access     ->   O(1)

// When you don't need any ordering,
// objects are an excellent choice!

// Objects don't have beginnings or endings

// Searching means not accessing certain key,
// but looking through all values. That's why O(n)

// Big O of Object Methods:

// Object.keys     ->  O(N)
// Object.values   ->  O(N)
// Object.entries  ->  O(N)
// hasOwnProperty  ->  O(1)

(() => {
  // //
  // let instructor = {
  //   firstName: 'Kelly',
  //   isInstructor: true,
  //   favoriteNumbers: [1, 2, 3, 4],
  // };
  // console.log(Object.keys(instructor));
  // // > (3) ['firstName', 'isInstructor', 'favoriteNumbers']
  // console.log(Object.values(instructor));
  // // > (3) ['Kelly', true, [ 1, 2, 3, 4 ]]
  // console.log(Object.entries(instructor));
  // // > (3) [Array(2), Array(2), Array(2)]
  // //     ==> [[keys], [values], [pairs]] ==>
  // // [ 'firstName', 'isInstructor', 'favoriteNumbers' ]
  // // [ 'Kelly', true, [ 1, 2, 3, 4 ] ]
  // // [
  // //   [ 'firstName', 'Kelly' ],
  // //   [ 'isInstructor', true ],
  // //   [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
  // // ]
  // console.log(instructor.hasOwnPropery('firstName'));
  // // true
  // Big O of Object Methods:
  // Object.keys     ->  O(N)
  // Object.values   ->  O(N)
  // Object.entries  ->  O(N)
  // hasOwnProperty  ->  O(1)
})();

/*                 When are Arrays Slow                */

// Arrays. Ordered lists!

// let names = ["Michael", "Melissa", "Andrea"];
// let values = [true, {}, [], 2, "awesome"];

// When to use Arrays:

// > When you need order
// > When you need fast access / insertion and
//   removal (sort of...)

// Big O of Arrays
//   Insertion  ->   it depends...
//   Removal    ->   it depends...
//   Searching  ->   O(N)
//   Access     ->   O(1)

(() => {
  //
  let names = ['Michael', 'Melissa', 'Andrea'];
  //               0          1          2
  // if we need names[2]. it jumps to -> 2
  // -> Access = O(1)

  // Insertion to the end
  // names.push("Raj"); // = O(1)

  // Insertion to the beginning = O(N):
  // names[0] => names[1], names[1] => names[2],
  // names[2] => names[3].

  // Same with the removal
  // Removal from the end
  // names.pop("Raj");  // = O(1)

  // Removal from the beginning = O(N):
  // names[1] => names[0], names[2] => names[1],
  // names[3] => names[2].

  // Big O of Arrays
  //   Insertion  ->   it depends...
  //   Removal    ->   it depends...
  //   Searching  ->   O(N)
  //   Access     ->   O(1)
})();

/*             Big O of Array Operations           */

// Big O of Array Operations:

// push()     -> O(1)
// pop()      -> O(1)

// shift()    -> O(N)
//  This method removes the first element
//  from an array and returns that removed element.
//  This method changes the length of the array.

// unshift()  -> O(N)
//  This method adds one or more elements
//  to the beginning of an array and returns the
//  new length of the array.

// concat()   -> O(N)
//  This method is used to merge two or more
//  arrays. This method does not change the existing
//  arrays, but instead returns a new array.

// slice()    -> O(N)
//  This method returns a shallow copy of
//  a portion of an array into a new array object
//  selected from start to end (end not included)
//  where start and end represent the index of items
//  in that array. The original array will not be
//  modified.

// splice()   -> O(N)
//  This method changes the contents of
//  an array by removing or replacing existing
//  elements and/or adding new elements in place.

// forEach()  -> O(N)
//  This method executes a provided function
//  once for each array element.

// map()      -> O(N)
//  This method creates a new array populated
//  with the results of calling a provided function on
//  every element in the calling array

// filter()   -> O(N)
//  This method creates a new array with
//  all elements that pass the test implemented by
//  the provided function.

// reduce()   -> O(N)
//  This method executes a reducer function
//  (that you provide) on each element of
//  the array, resulting in single output value.

// etc.       -> O(N)

// sort()     -> O(N * logN)
//  This method sorts the elements of an array
//   in place and returns the sorted array.
//  The default sort order is ascending, built
//   upon converting the elements into strings,
//   then comparing their sequences of UTF-16
//   code units values.
//  The time and space complexity of the sort
//   cannot be guaranteed as it depends on
//   the implementation.
