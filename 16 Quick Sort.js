/*          Quick Sort          */

//     Quick Sort
//
// + Like merge sort, exploits the fact
//    that arrays of 0 or 1 element are
//    always sorted
//
// + Works by selecting one element
//    (called the "pivot") and finding
//    the index where the pivot should
//    end up in the sorted array
//
// + Once the pivot is positioned
//    appropriately, quick sort can be
//    applied on either side of the pivot

// How does it work?
//
// Basically it works with a tree
//
// [5, 2, 1, 8, 4, 7, 6, 3]
//
//            5
//       3         7
//   1      4   6      8
//     2

/*          Pivot Helper Introduction          */

//     Pivot Helper
//
// + In order to implement merge sort,
//    it's useful to first implement a
//    function responsible for arranging
//    elements in an array on either side
//    of a pivot.
//
// + Given an array, this helper function
//    should designate an element a the pivot.
//
// + It should then rearrange elements in the
//    array so that all values less than the
//    pivot are moved to the left of the pivot,
//    and all values greater thatn the pivot
//    are moved to the right of the pivor.

//     Picking a pivot
//
// + The runtime of quick sort depends in
//    part on how one selects the pivot.
//
// + Ideally, the pivot should be chosen
//    so that it's roughly the median value
//    in the data set you're sorting.
//
// + For simplicity, we'll always choose
//    the pivot to be the first element
//    (we'll talk about consequences of
//     this later)

//       Pivot Helper Example
//
// let arr = [5, 2, 1, 8, 4, 7, 6, 3]
//
// pivot(arr); // 4;
//
// arr;
// // any of these is an acceptable mutation:
// // [2, 1, 4, 3,  5, 8, 7, 6]
// // [1, 4, 3, 2,  5, 7, 6, 8]
// // [3, 2, 1, 4,  5, 7, 6, 8]
// // [4, 1, 2, 3,  5, 6, 8, 7]
// // there are other acceptable mutations too!
// // it only matters that e.g. [1,2,3,4] was
// //   to the left and [5,6,7,8] to the right

//       Pivot Pseudocode
//
// + It will help to accept three arguments:
//    an array, a start index, and an end index
//    (these can default to 0 and the array
//     length minus 1 respectively)
//
// + Grab the pivor from the start of the array
//
// + Store the current pivot index in a variable
//    (this will keep track of where the pivot
//     should end up)
//
// + Loop through the array from the start until
//    the end:
//      > If the pivot is greater than the current
//         element, increment the pivot index
//         variable and then swap the current
//         element with the element at the pivot
//         index.
//
// + Swap the starting element (i.e the pivot)
//    with the pivot index
//
// + Return the pivot index

/*          Pivot Helper Implementation          */

(() => {
  // function pivot(arr, start = 0, end = arr.length + 1) {
  // // basic swap function
  // function swap(array, i, j) {
  //   var temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }
  // // // es6 swap function
  // // const swap = (arr, idx, idx2) => {
  // //   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  // // };
  //   var pivot = arr[start];
  //   var swapIdx = start;
  //   for (var i = start + 1; i < arr.length; i++) {
  //     if (pivot > arr[i]) {
  //       swapIdx++;
  //       swap(arr, swapIdx, i);
  //     }
  //   }
  //   swap(arr, start, swapIdx);
  //   return swapIdx;
  // }
  // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
  // // [1,2,3,4,5,6,7,8] pivot should return index '3'
  // // all that matters is that 4 is in the right spot.
  // // all to the left should be <4 and >4 to the right
  // //
  // // [4, 8, 2, 1, 5, 7, 6, 3] ->
  // // [4, 2, 8, 1, 5, 7, 6, 3] ->
  // // [4, 2, 8, 1, 5, 7, 6, 3] ->
  // // [4, 2, 1, 8, 5, 7, 6, 3] ->
  // // [4, 2, 1, 8, 5, 7, 6, 3] ->
  // // [4, 2, 1, 3, 5, 7, 6, 8] ->
  // // [3, 2, 1, 4, 5, 7, 6, 8]
})();

/*       Quick Sort Implementation       */

//     Quicksort Pseudocode
//
// + Call the pivot helper on the array.
// + When the helper returns to you the
//    updated pivot index, recursively
//    call the pivot helper on the sub-
//    array to the left of that index,
//    and the subarray to the right of
//    that index.
// + Your base case occurs when you con-
//    sider a subarray with less than 2
//    elements.

(() => {
  // function quickSort(arr, left = 0, right = arr.length - 1) {
  //   let pivotIndex = pivot(arr, left, right);
  //   if (left < right) {
  //     let pivotIndex = pivot(arr, left, right);
  //     // left side
  //     quickSort(arr, left, pivotIndex - 1);
  //     // right side
  //     quickSort(arr, pivotIndex + 1, right);
  //   }
  //   return arr;
  // }
  // function pivot(arr, start = 0, end = arr.length + 1) {
  //   function swap(array, i, j) {
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   var pivot = arr[start];
  //   var swapIdx = start;
  //   for (var i = start + 1; i < arr.length; i++) {
  //     if (pivot > arr[i]) {
  //       swapIdx++;
  //       swap(arr, swapIdx, i);
  //     }
  //   }
  //   swap(arr, start, swapIdx);
  //   return swapIdx;
  // }
  // console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
  // //        [4, 6, 9, 1, 2, 5, 3]
  // //        [3, 2, 1, 4, 6, 9, 5]
  // //                  4
  // //         3, 2, 1    6, 9, 5
  // //               3       6
  // //         2  1       5     9
  // //            2
  // //         1
})();

/*       Quick Sort Call Stack Walkthrough       */

/*       Quick Sort Big O Complexity       */

// Time Complexity (Best)    => O(nlogn)
// Time Complexity (Average) => O(nlogn)
// Time Complexity (Worst)   => O(n^2)
// Space Complexity          => O(logn)
