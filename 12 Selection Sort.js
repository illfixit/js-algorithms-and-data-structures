/*                     Selection Sort                     */

/*               Selection Sort Introduction              */

// Selection Sort
// Similar to bubble sort, but instead of first
//  placing large values into sorted position,
//  it places small values into sorted position.

// [ 5, 3, 4, 1, 2 ]
//   ^  ^
// [ 5, 3, 4, 1, 2 ]
//   ^ min ^
// [ 5, 3, 4, 1, 2 ]
//   ^ min    ^
// [ 5, 3, 4, 1, 2 ]
//   ^       min ^
// Swap min and original value
// [ 1, 3, 4, 5, 2 ]
//      ^  ^
// [ 1, 3, 4, 5, 2 ]
//      ^     ^
// [ 1, 3, 4, 5, 2 ]
//      ^       min
// Swap min and original value
// [ 1, 2, 4, 5, 3 ]
//         ^  ^
// [ 1, 2, 4, 5, 3 ]
//         ^    min
// Swap min and original value
// [ 1, 2, 3, 5, 4 ]
//            ^  min
// Swap min and original value
// [ 1, 2, 3, 4, 5 ]

// Selection Sort Pseudocode

// (+) Store the first element as the smallest
//    value you've seen so far.
// (+) Compare this item to the next item in the
//    array until you find a smaller number.
// (+) If the "minimum" is not the value (index)
//    you initially began with, swap the two values
// (+) Repeat this with the next element until the
//    array is sorted.

/*             Selection Sort Implementation             */

(() => {
  // // My Attempt ~= Author's way!
  // function selectionSort(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     let lowest = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] < arr[lowest]) {
  //         lowest = j;
  //       }
  //     }
  //     if (lowest !== i) {
  //       [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  //     }
  //   }
  //   return arr;
  // }
  // console.log(selectionSort([34, 22, 10, 19, 17]));
})();

(() => {
  // Slightly improved version
  // function selectionSort(arr) {
  //   const swap = (arr, idx1, idx2) =>
  //     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  //   for (let i = 0; i < arr.length; i++) {
  //     let lowest = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[lowest] > arr[j]) {
  //         lowest = j;
  //       }
  //     }
  //     if (i !== lowest) swap(arr, i, lowest);
  //   }
  //   return arr;
  // }
  // console.log(selectionSort([34, 22, 10, 19, 17]));
})();

/*            Selection Sort Big O Complexity            */

// Roughly O(N^2)
// Technically every time we do -1 comparison,
//  but it doesn't really matter. So O(N^2)

// Selection Sort is better than Bubble Sort if
//  swap operation is expensive. We do only one
//  swap every outer cicle in Selection Sort.
