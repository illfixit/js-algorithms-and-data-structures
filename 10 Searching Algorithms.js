/*                  Searching algorithms                  */

/*                   Intro to Searching                   */

// Objectives

// + Describe what a seatching algorithm is
// + Implement linear search on arrays
// + Implement binary search on sorted arrays
// + Implement a naive string searching algorithm
// + Implement the KMP string searching algorithm

/*                 Intro to Linear Search                 */

// Given an array, the simplest way to search for an
//  values is to look at every element in the array
//  at every element in the array and check if it's
//  the value we want.

// JavaScript has search!

// There are many different search methods on arrays in
//  JavaScript:
//  + indexOf // int
//  + includes // bool
//  + find
//  + findIndex

// Linear Search
// Let's search for 12:
// [5,8,1,100,12,3,12]
//  - - -  -  +
// returns index 4

/*                 Linear Search Solution                 */

// Linear Search Pseudocode
// + This function accepts an array and a value
// + Loop through the array and check if the
//    current array element is equal to the
//    value
// + If it is, return the index at which the
//   element is found.
// + If the value is never found, return -1

(() => {
  // function linearSearch(arr, val) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) return i;
  //   }
  //   return -1;
  // }
  // console.log(linearSearch([34, 56, 1, 2], 1));
})();

// Linear Search BIG O

// O(1) Best ... Average O(N) ... O(N) Worst

/*                 Intro to Binary Search                 */

// + Binary search is a much faster form of search
// + Rather than eliminating one element at a time,
//  you can eliminate half of the remaining
//  elements at a time
// + Binary search only works on sorted arrays!

// Divide and Conquer
// Array must be sorted.
// Let's search for 15:

//  [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
// left                middle(12<15)          right
//                       left  middle(17>15)  right
//                       left  15  right

/*                 Intro to Binary Search                 */

// + This function accepts a sorted array and a value
// + Create a left pointer at the start of the array,
//    and a right pointer at the end of the array
// + While the left pointer comes before the right
//   pointer:
//    > Create a pointer in the middle
//    > If you find the value you want, return the index
//    > If the value is too small, move the left pointer up
//    > If the value is too big, move the right pointer down
// + If you never find the value, return -1

(() => {
  // // My attempt. Working great.
  // function binarySearch(arr, elem) {
  //   let start = 0;
  //   let end = arr.length - 1;
  //   let middle = Math.floor((start + end) / 2);
  //   while (start < end) {
  //     if (elem === arr[start]) {
  //       return start;
  //     } else if (elem === arr[middle]) {
  //       return middle;
  //     } else if (elem === arr[end]) {
  //       return end;
  //     } else {
  //       if (elem > arr[middle]) {
  //         start = middle;
  //         middle = Math.floor((start + end) / 2);
  //       } else {
  //         end = middle;
  //         middle = Math.floor((start + end) / 2);
  //       }
  //     }
  //   }
  //   return -1;
  // }
  // console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));
})();

(() => {
  // // Author's function
  // function binarySearch(arr, elem) {
  //   let start = 0;
  //   let end = arr.length - 1;
  //   let middle = Math.floor((start + end) / 2);
  //   // console.log(start, middle, end);
  //   while (arr[middle] !== elem && start <= end) {
  //     if (elem < arr[middle]) end = middle - 1;
  //     else start = middle + 1;
  //     middle = Math.floor((start + end) / 2);
  //   }
  //   arr[middle] == elem ? middle : -1; // returns middle or -1
  // }
  // console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));
})();

/*                  Binary Search BIG O                  */

// What about Big O of Binary Search?
// Worst and Average Cases = O(log(n))
//               Best Case = O(1)
// Array must be sorted!

/*                  Naive String Search                  */

// Naive String Search

// + Suppose you want to count the number of times
//    a smaller string appears in a longer string
// + A straightforward approach involves checking
//    pairs of characters individually.

// Pseudocode

// + Loop over the longer string
// + Loop over the shorter string
// + If the characters don't match, break out
//    of the inner loop
// + If the characters do match, keep going
// + If you complete the inner loop and find
//    a match, increment the count of matches
// + Return the count

/*           Naive String Search Implementation           */

(() => {
  // // Naive Search
  // function naiveSearch(long, short) {
  //   let count = 0;
  //   for (let i = 0; i < long.length; i++) {
  //     for (let j = 0; j < short.length; j++) {
  //       if (long[i + j] !== short[j]) break;
  //       if (j === short.length - 1) count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(naiveSearch('lorie loled', 'lol'));
})();
