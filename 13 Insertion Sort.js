/*                    Insertion Sort                    */

/*              Insertion Sort Introduction             */

// Insertion Sort

// Builds up the sort by gradually creating
//  a larget left half which is always sorted.

//         [ 5, 3, 4, 1, 2 ]
// sorted   |_|
//         [ 3, 5, 4, 1, 2 ]
// sorted   |____|
//         [ 3, 4, 5, 1, 2 ]
// sorted   |_______|
//         [ 1, 3, 4, 5, 2 ]
// sorted   |_________|
//         [ 1, 2, 3, 4, 5 ]
// sorted   |_____________|

// Insertion Sort Pseudocode

// (+) Start by picking the second element in the array.
// (+) Now compare the second element with the one before
//      it an swap if necessary
// (+) Continue to the next element and if it is in the
//      incorrect order, iterate through the sorted
//      portion (i.e. the left side) to place in the
//      correct place
// (+) Repeat until the array is sorted.

/*            Insertion Sort Implementation            */

(() => {
  // function insertionSort(arr) {
  //   for (var i = 1; i < arr.length; i++) {
  //     var currentVal = arr[i];
  //     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
  //       arr[j + 1] = arr[j];
  //     }
  //     arr[j + 1] = currentVal;
  //   }
  //   return arr;
  // }
  // console.log(insertionSort([2, 1, 9, 76, 4]));
})();

/*            Insertion Sort BIG O Complexity            */

// Worst case is O(N^2)
// But if our data is almost all sorted, it's ok.
