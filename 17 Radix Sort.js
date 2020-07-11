/*       Radix Sort Introduction       */

// COMPARISON SORTS
// Average Time Complexity
//
// > Bubble Sort    - O(n^2)
// > Insertion Sort - O(n^2)
// > Selcetion Sort - O(n^2)
//
// > Quick Sort - O(nlog(n))
// > Merge Sort - O(nlog(n))

// Can we do Better?
// Yes, but not by making comparisons

// RADIX SORT
// we're not making comparisons here

// + Radix sort is a special sorting
//    algorithm that works on lists
//    of  numbers.
// + It never makes comparisons between
//    elements!
// + It exploits the fact that informa-
//    tion about the size of a number
//    is emcoded in the number of digits.
// + More digits means a bigger number.

// [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

/* We create 10 buckets. Sorted by the last digit
 *********************************************************
 *   *   *     *     *   *   *      *       *     *     *
 *   *   *     *     *   *   *      *       *     *     *
 *   *   *     *     *   *   *      *       *     *     *
 *   *   *     *     *   *   *  86  *       *     *     *
 *   *   *     *     *   *   * 4386 *  9637 *     *     *
 *   *   *     *     *   *   * 3556 *  8157 *     *     *
 *   *   * 902 * 593 * 4 *   * 1556 *   7   * 408 * 29  *
 * 0 * 1 *  2  *  3  * 4 * 5 *   6  *   7   *  8  *  9  *
 ********************************************************/

/* We form another array from these buckets. -1 digit sort.
 *********************************************************
 *     *   *     *      *   *      *   *   *      *     *
 *     *   *     *      *   *      *   *   *      *     *
 *     *   *     *      *   *      *   *   *      *     *
 * 408 *   *     *      *   *      *   *   *      *     *
 *  7  *   *     *      *   * 8157 *   *   *      *     *
 *  4  *   *     *      *   * 3556 *   *   *  86  *     *
 * 902 *   * 29  * 9637 *   * 1556 *   *   * 4386 * 593 *
 *  0  * 1 *  2  *  3   * 4 *   5  * 6 * 7 *  8   *  9  *
 ********************************************************/

// We do it here 4 times (max number of digits).
//  every time we have more and more correctly
//  sorted array. In the end there's a huge sor-
//  ted '0' bucket and a few other sorted buckets
//  with largest numbers.

/*       Radix Sort Helper Methods       */

// In order to implement radix sort, it's
//  helpful to build a few helper functions
//  first:
// + getDigit()
// + digitCount()
// + mostDigits()

// getDigit(num, place) - returns the
//  digit in num at the given place value
(() => {
  // function getDigit(num, i) {
  //   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  // }
  // console.log(getDigit(7323, 0)); // 3
  // console.log(getDigit(7323, 1)); // 2
  // console.log(getDigit(7323, 2)); // 3
  // console.log(getDigit(7323, 3)); // 7
})();

// digitCount(num) - returns the number
//  of digits in num
(() => {
  // function digitCount(num) {
  //   if (num === 0) return 1;
  //   return Math.floor(Math.log10(Math.abs(num))) + 1;
  // }
  // console.log(digitCount(120));
})();

// mostDigits(nums) - Given an array of numbers,
//  returns the number of digits in the largest
//  numbers in the list

(() => {
  // function digitCount(num) {
  //   if (num === 0) return 1;
  //   return Math.floor(Math.log10(Math.abs(num))) + 1;
  // }
  // function mostDigits(nums) {
  //   let maxDigits = 0;
  //   // for(let i = 0; i < nums.length; i++) {
  //   for (num of nums) {
  //     if (digitCount(num) > maxDigits) maxDigits = digitCount(num);
  //   }
  //   return maxDigits;
  // }
  // console.log(mostDigits([12345, 56, 7]));
})();

/*       Radix Sort Pseudocode       */

// + Define a function that accepts list
//    of numbers.
// + Figure out how many digits the lar-
//    gest number has.
// + Loop from k = 0 up to this largest
//    number of digits.
// + For each iteration of the loop:
//    > Create buckets for each digit (0-9)
//    > Place each number in the corresponding
//       bucket based on its k(th) digit
// + Replace our existing array with
//    values in our backets, starting
//    with 0 and going up to 9.
// + Return list at the end!

/*       Radix Sort Implementation       */

(() => {
  // function getDigit(num, i) {
  //   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  // }
  // function digitCount(num) {
  //   if (num === 0) return 1;
  //   return Math.floor(Math.log10(Math.abs(num))) + 1;
  // }
  // function mostDigits(nums) {
  //   let maxDigits = 0;
  //   // for(let i = 0; i < nums.length; i++) {
  //   for (num of nums) {
  //     if (digitCount(num) > maxDigits) maxDigits = digitCount(num);
  //   }
  //   return maxDigits;
  // }
  // function radixSort(nums) {
  //   let maxDigitCount = mostDigits(nums);
  //   for (let k = 0; k < maxDigitCount; k++) {
  //     let digitBuckets = Array.from({ length: 10 }, () => []);
  //     for (let i = 0; i < nums.length; i++) {
  //       let digit = getDigit(nums[i], k);
  //       digitBuckets[digit].push(nums[i]);
  //     }
  //     nums = [].concat(...digitBuckets);
  //   }
  //   return nums;
  // }
  // console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
  // // [ 12, 23, 345, 2345, 5467, 9852 ]
})();

/*       Radix Sort Big O       */

// Time Complexity (Best)    -> O(nk)  *
// Time Complexity (Average) -> O(nk)  *
// Time Complexity (Worst)   -> O(nk)  *
// Space Complexity          -> O(n+k) *

// * n- length of array,
//   k - number of digits (average)
