/*                        Recursion                        */

// Objectives
// + Define what recursion is and how can it be used
// + Undestand the two essential components of a
//   recursive function.
// + Visualize the call stack to better debug and
//   understand recursive functions
// + Use helper method recursion and pure recursion
//   to solve more difficult problems.

/*              Story Time Martin  The Dragon               */

/*                    Why Use Recursion?                    */

// What is recursion?
//  A process (a function in our case) that calls itself.

// Recursion is everywhere
//  + JSON.parse / JSON.stringify
//  + document.getElementById and DOM traversal algorithms
//  + Object traversal
//  + It is used in more complex data structure
//  + It's sometimes a cleaner alternative to iteration.

/*                      The Call Stack                      */

// What happens behind the scene?

// + In almost all programming languages, there is a built
//    in data structure that manages what happens when
//    functions are invoked.
// + It's named the call stack!

// The call stack

// + It's a stack data structure
// + Any time a function is invoked it is placed (pushed)
//    on the top of the call stack
// + When JavaScript sees the return keyword or when the
//    function ends, the compiler will remove (pop)

(() => {
  // function takeShower() {
  //   return 'Showering';
  // }
  // function eatBreakfast() {
  //   let meal = cookFood();
  //   return `Eating ${meal}`;
  // }
  // function cookFood() {
  //   let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  //   return items[Math.floor(Math.random() * items.length)];
  // }
  // function wakeUp() {
  //   console.log(takeShower());
  //   console.log(eatBreakfast());
  //   console.log('Ok ready to go to work!');
  // }
  // wakeUp();
})();

/*               Our First Recursive Function               */

// How recursive functions work

// Invoke the same function with a different input
//  until you reach your base case

// Base Case
// The condition when the recursion ends.

// Two essential parts of a recursive function!
//  + Base Case
//  + Different Input each time

// Our first recursive function
(() => {
  // // Simple iterative function
  // function countDown(num) {
  //   for (let i = num; i > 0; i--) {
  //     console.log(i);
  //   }
  //   console.log('All done!');
  // }
  // // Our first recursive function
  // function countDown(num) {
  //   if (num <= 0) {
  //     console.log('All done!');
  //     return;
  //   }
  //   console.log(num);
  //   num--;
  //   countDown(num);
  // }
  // countDown(5);
  // // 5
  // // 4
  // // 3
  // // 2
  // // 1
  // // All done!
})();

/*              Our Second Recursive Function              */

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

/*              Writing Factorial Iteratively              */

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

/*              Writing Factorial Recursively              */

(() => {
  // // Recursive factorial function
  // function factorial(num) {
  //   if (num === 1) {
  //     return 1;
  //   }
  //   return num * factorial(num - 1);
  // }
  // console.log(factorial(3));
})();

/*                Common Recursion Pitfalls                */

// Common mistakes
// - No base case
// - Forgetting to return or returning wrong thing
// - Stack overflow!

/*                 Helper Method Recursion                 */

// Common pattern with common iterative function that
//  includes data and recursive helper function that
//  modifies this data and returns it

// function outer(input) {
//   let outerScopedVariable = [];

//   function helper(helperInput) {
//     // modify the outerScopedVariable
//     helper(helperInput--)
//   }

//   helper(input);

//   return outerScopedVariable;
// }

// Another Example
// Let's try to collect all of the odd values in an array!

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helperInput(helperInput.slice(1));
//   }

//   helper(arr);

//   return result;
// }

/*                      Pure Recursion                      */

// No nested functions
// No redundant data

(() => {
  // function collectOddValues(arr) {
  //   let newArr = [];
  //   if(arr.length === 0) {
  //     return newArr;
  //   }
  //   if(arr[0] % 2 !== 0) {
  //     newArr.push(arr[0]);
  //   }
  //   // [2,3,4,5].slice(1) -> [3,4,5]
  //   newArr = newArr.concat(collectOddValues(arr.slice(1)));
  //   return newArr;
  // }
  // // collectOddValues([1,2,3,4,5]) ->
  // //   [1].concat(collectOddValues([2,3,4,5])) ->
  // //     [].concat(collectOddValues([3,4,5])) ->
  // //       [3].collectOddValues([4,5]) ->
  // //         [].collectOddValues([5]) ->
  // //          [5].collectOddValues([]) ->
  // //              return []
})();

// Pure Recursion Tips
//  + For arrays, use methods like slice, the spread
//     operator, and concat that make copies of
//     arrays so you do not mutate them.
//  + Remember that strings are immutable so you'll
//     need to use methods like slice, substr, or
//     substring to make copies of strings
//  + To make copies of objects use Object.assign,
//     or the spread operator
