/*                 TIMING OUR CODE                   */

(() => {
  // function addUpTo(n) {
  //   let total = 0;
  //   for (let i = 1; i <= n; i++) {
  //     total += i;
  //   }
  //   return total;
  // }
  // console.log(addUpTo(3)); // 6
  // console.log(addUpTo(100)); // 5050
})();

(() => {
  // function addUpTo(n) {
  //   return (n * (n + 1)) / 2;
  // }
  // console.log(addUpTo(3)); // 6
  // console.log(addUpTo(100)); // 5050
})();

(() => {
  // function addUpTo(n) {
  //   let total = 0;
  //   for (let i = 1; i <= n; i++) {
  //     total += i;
  //   }
  //   return total;
  // }
  // var t1 = Date.now();
  // addUpTo(1000000000);
  // var t2 = Date.now();
  // console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
  // // Time Elapsed: 5.042 seconds.
  // // Time Elapsed: 4.501 seconds.
  // // Time Elapsed: 4.325 seconds.
})();

(() => {
  // function addUpTo(n) {
  //   return (n * (n + 1)) / 2;
  // }
  // var t1 = Date.now();
  // let total = addUpTo(1000000000);
  // var t2 = Date.now();
  // console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
  // // Time Elapsed: 0 seconds.
  // console.log(total);
  // // 500000000500000000
})();

/*                Counting Operations               */

// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }
// We have:
//  1 multiplication,
//  1 addition,
//  1 division
// (3 operations)

// function addUpTo(n) {
//   let total = 0;
//   for(let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// We have:
//  1 assignment (let total = 0;)
//  in for condition:
//    1 assignment (let i = 1), n comparisons (i <= n), n additions + n assignments (i++)
//  n additions + n assignments inside for loop (total += 1)

// Depending of what we count, the number of operations
// can be as low as 2n or as high as 5n + 2
//
// But regardless of the exact number, the number of
// operations grows roughly proportionally with n

/* Visualizing Time Complexities */

(() => {
  // // Author uses Perfomance Tracker
  // function addUpToFirst(n) {
  //   var total = 0;
  //   for (var i = 0; i <= n; i++) {
  //     total += i;
  //   }
  //   return total;
  // }
})();

/*              Official Intro to Big O               */

// Big O Notation is a way to formalize fuzzy counting
// It allows us to talk formally about how the runtime
// of an algorithm grows as the inputs grow.

// We won't care about the details, only the trends.

// We say that an algorithm is O(f(n)) if
// the number of simple operations the computer
// has to do is eventually less than a constant
// times f(n) as n increases.

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n**2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different!

// We are talking about the worst case scenario

(() => {
  // // Always 3 operations => O(1)
  // function addUpTo(n) {
  //   return (n * (n + 1)) / 2;
  // }
  // // Number of operations is (eventually)
  // // bounded by a multiple of n (say, 10n)
  // function addUpToFirst(n) {
  //   var total = 0;
  //   for (var i = 0; i <= n; i++) {
  //     total += i;
  //   }
  //   return total;
  // }
  // // Number of operations is (eventually)
  // // bounded by a multiple of n (say, 10n)
  // // => O(2n) -> O(n)
  // function countUpAndDown(n) {
  //   console.log('Going up!');
  //   for (let i = 0; i < n; i++) {
  //     //
  //     console.log(i); // Roughly O(n)
  //   } //
  //   console.log('At the top!\nGoing down...');
  //   for (let j = n - 1; j >= 0; j--) {
  //     //
  //     console.log(j); // Roughly O(n)
  //   } //
  //   console.log('Back down. Bye!');
  // }
})();

(() => {
  // // O(n ** 2)
  // function printAllPairs(n) {
  //   for (var i = 0; i < n; i++) {     //
  //     for (var j = 0; j < n; j++) {  //       //
  //       console.log(i, j);          // O(n)  // O(n)
  //     }                            //       //
  //   }                             //
  // }
})();

/*               Simpifying Big O Expressions          */

// O(2n)           -> O(n)
// O(500)          -> O(1)
// O(13 * n**2)    -> O(n**2)
// O(n+10)         -> O(n)
// O(1000n + 50)   -> O(n)
// O(n**2 +5n + 8) -> O(n**2)

// Big O Shorthands

// Analyzing complexity with big O can get complicated

// 1. Arithmetic operations are constant
// 2. Vatiable assignment is constant
// 3. Accessing elements in an array (by index) or
//    object (by key) is constant
// 4. In a loop, the complexity is the length of
//    the loop times the complexity of whatever
//    happens inside of the loop

(() => {
  // // 5 doesn't matter. It is still O(n)
  // function logAtLeast5(n) {
  //   // It logs either 5 or n numbers in a row
  //   for (var i=1; i <= Math.max(5, n); i++) {
  //     console.log(i);
  //   }
  // }
  // // n doesn't matter. It is still O(5) -> O(1)
  // function logAtMost5(n) {
  //   for (var i=1; i<= Math.min(5, n); i++) {
  //     console.log(i);
  //   }
  // }
})();

/*                 Space Complexity                 */

//   So far, we've been focusing on time complexity:
// how can we analyze the runtime of an alorithm as
// the size of the inputs increases?

//   We can also use big O notation to analyze space
// complexity: how much additional memory do we need
// to allocate in order to run the code in our
// algorithm?

//   What about the inputs?

//   Sometimes you'll hear the term auxiliary space
// complexity to refer to space required by the
// algorithm, not including space taken up by the
// inputs

//   Unless otherwise noted, when we talk about
// space complexity, technically we'll be talking
// about auxiliary space complexity.

//  Space Complexity in JS
//     Rules of Thumb

// + Most primitives (booleans, numbers, undefined,
//    null) are constant space.
// + Strings require O(n) space (where n is the
//    string length).
// + Reference types are generally O(n), where n is
//    the length (for arrays) or the number of keys
//     (for objects).

(() => {
  // // Space Complexity (O(2 numbers)) -> O(1)
  // function sum(arr) {
  //   let total = 0; // we have 1 number (total)
  //   // we have another number (i);
  //   for (let i = 0; i < arr.length; i++) {
  //     total += arr[i];
  //   }
  //   return total;
  // }
  // // Space Complexity O(n)
  // function double(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(2 * arr[i]);
  //   }
  //   return newArr; // n numbers
  // }
})();

/*             Logs and Section Recap               */

//                  Logarithms

//   We've encountered some of the most common
// complexities: O(1), O(n), O(n**2)

//   One that appears more often than you might like
// is the logarithm!

//   Logarithm is the inverse of the exponent

// log2(8) = 3            -->   2**3 = 8
// log2(value) = exponent -->   2**exponent = value

//   We'll omit the 2. log === log2

//  Certain searching algorithms have logarithmic
// time complexity

//  Efficient sorting algorithms involve logarithms.

//  Recursion sometimes involves logarithmic space
// complexity

//                     Recap

// >> To analyze the performance of an algorithm,
//    we use Big O Notation

// >> Big O Notation can give us a high level
//    understanding of the time or space complexity
//    of an algorithm

// >> Big O Notation doesn't care about precision,
//    only about general trends
//    (linear? quadratic? constant?)

// >> The time or space complexity (as measured
//    by Big O) depends only on the algorithm,
//    not the hardware used to run the algorithm

// >> Big O Notation is everywhere, so get lots
//    of practice!
