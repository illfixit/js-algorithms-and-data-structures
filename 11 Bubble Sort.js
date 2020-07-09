/*                    Bubble Sort                    */

/*        Introduction to Sorting Algorithms         */

// What is sorting?

// Sorting is the process of rearranging the items
//  in a collection (e.g. an array) so that the items
//  are in some kind of order.

// Examples:
// + Sorting numbers from smallest to largest
// + Sorting names alphabetically
// + Sorting movies based on release year
// + Sorting movies based on revenue

// function sort(arr) {
//   // ...
//   // ...
//   return arr;
// }
// sort([23, 45, 6, 12, 13]); // [6,12,13,23,45]

// Why do we need to learn this?
// + Sorting is an incredibly common task,
//    so it's good to know how it works
// + There are many different ways to sort
//    things, and different techniques have
//    their own advanteges and disadvantages

// Objectives
// + Implement bubble sort
// + Implement selection sort
// + Implement insertion sort
// + Understand why it is important to learn
//    these simpler sorting algorithms

/*              Built-in JavaScript Sorting              */

// JavaScript has a sort method...

// ... but it doesn't always work the way you expect

// Looks OK
// let arr = ["Steele", "Colt", "Data Structures", "Algorithms"]
// arr.sort() // ["Algorithms", "Colt", "Data Structures", "Steele"]

// Hmmm...
// [6, 4, 15, 10].sort() // [10, 15, 4, 6]

// Telling JavaScript how to sort

// The built-in sort method accepts an optional
//  comparator function
// You can use this comparator function to tell
//  JavaScript how you want it to sort
// The Comparator looks at pairs of elements
//  (a and b), determines their sort order based
//  on the return value
//    > If it returns a negative number, a should
//       come before b
//    > If it returns a positive numberm a should
//       come after b
//    > If it returns 0, a and b are the same as
//       far as the sort is concerned

// Examples

(() => {
  // function numberCompare(num1, num2) {
  //   return num1-num2;
  // }
  // [6,4,15,10].sort(numberCompare); // [4,6,10,15]
})();

(() => {
  // function numberCompare(num1, num2) {
  //   return num2-num1;
  // }
  // [6,4,15,10].sort(numberCompare); // [15,10,6,4]
})();

(() => {
  // function compareByLen(str1, str2) {
  //   return str1.length - str2.length;
  // }
  // let r = ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
  // > ['Colt', 'Steele', 'Algorithms', 'Data Structures']
})();

/*                 Bubble Sort Overview                 */

// BubbleSort

// A sorting algorithm where the largest values bubble up
//  to the top!

(() => {
  // // My Attempt to implement Bubble Sort
  // function bSort(arr) {
  //   let c;
  //   for (let a = 0; a < arr.length - 1; a++) {
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       if (arr[i] > arr[i + 1]) {
  //         c = arr[i];
  //         arr[i] = arr[i + 1];
  //         arr[i + 1] = c;
  //       }
  //     }
  //   }
  //   return arr;
  // }
  // console.log(bSort([10, 14, 29, 30, 14, 18, 37]));
  // // > [ 10, 14, 14, 18, 29, 30, 37 ]
})();

(() => {
  // // My ES6 Attempt to implement Bubble Sort
  // function bSort(arr) {
  //   let c;
  //   for (let a = 0; a < arr.length - 1; a++) {
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       if (arr[i] > arr[i + 1]) {
  //         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //       }
  //     }
  //   }
  //   return arr;
  // }
  // console.log(bSort([10, 14, 29, 30, 14, 18, 37]));
  // // > [ 10, 14, 14, 18, 29, 30, 37 ]
})();

// Author's Approach to Bubble Sort

// BubbleSort Pseudocode

// + Start looping from with a variable called i the end
//    of the array towards the beginning
// + Start an inner loop with a variable called j from
//    the beginning until i-1
// + If arr[j] is greater than arr[j+1], swap those two
//    values!
// + Return the sorted array

/*              Bubble Sort Implementation              */

(() => {
  // // Author's Naive Bubble Sort
  // function bubbleSort(arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     for (var j = 0; j < arr.length; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         //SWAP!
  //         var temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }
  //   return arr;
  // }
  // console.log(bubbleSort([10, 14, 29, 30, 14, 18, 37]));
  // // > [ 10, 14, 14, 18, 29, 30, 37 ]
})();

(() => {
  // // Author's Improved Naive Bubble Sort
  // function bubbleSort(arr) {
  //   for (var i = arr.length; i > 0; i--) {
  //     for (var j = 0; j < i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         //SWAP!
  //         var temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }
  //   return arr;
  // }
  // console.log(bubbleSort([10, 14, 29, 30, 14, 18, 37]));
  // // > [ 10, 14, 14, 18, 29, 30, 37 ]
})();

/*               Bubble Sort Optimization               */

(() => {
  // // Author's Optimized Bubble Sort
  // function bubbleSort(arr) {
  //   var noSwaps;
  //   for (var i = arr.length; i > 0; i--) {
  //     noSwaps = true; // if after for loop still true -> exit
  //     for (var j = 0; j < i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         //SWAP!
  //         var temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //         noSwaps = false;
  //       }
  //     }
  //     if (noSwaps) break;
  //   }
  //   return arr;
  // }
  // console.log(bubbleSort([10, 14, 29, 30, 14, 18, 37]));
  // // > [ 10, 14, 14, 18, 29, 30, 37 ]
})();

/*              Bubble Sort BIG O Complexity              */

// In general it's O(N^2)
// If we use noSwaps and array is almost sorted, it's O(N)
