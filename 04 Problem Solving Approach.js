/*        Algorithms and Problem Solving Patterns     */

/*           Introduction to Problem Solving          */

//  Objectives:
//
// > Define what an algorithm is
// > Devise a plan to solve algorithms
// > Compare and contrast problem solving
//   patterns including frequency counters,
//   two pointer problems and divide and
//   conquer

// What is an algorithm?
// A process or set of steps to accomplish a certain task

//  Almost everything that you do in programming involves
// some kind of algorithm!

// How do you improve?
// > Devise a plan for solving problems
// > Master common problem solving patterns

// Problem Solving Strategies

// Basic plan
//  > Understand the problem
//  > Explore concrete examples
//  > Break it down
//  > Solve / Simplify
//  > Look back and refactor

// Understand the problem
//  1.  Can I restate the problem in my own words?
//  2.  What are the inputs that go into the problem?
//  3.  What are the outputs that should come from
//     the solution of the problem?
//  4.  Can the outputs be determined from the inputs?
//     In other words, do I have enough information to
//     solve the problem? (You may not be able to
//     answer this question until you set about solving
//     the problem. That's okay; it's still worth
//     considering the question at the this early stage)
//  5.  How should I label the important pieces of data
//     that are a part of the problem?

(() => {
  // =============================================
  // Write a function which takes two numbers and
  //  returns their sum.
  // =============================================
  //  1.  Can I restate the problem in my own words?
  //       - "Implement addition".
  //  2.  What are the inputs that go into the problem?
  //       - ints?
  //       - floats?
  //       - what about string for large numbers?
  //  3.  What are the outputs that should come from
  //     the solution of the problem?
  //       - int? float? string?
  //  4.  Can the outputs be determined from the inputs?
  //     In other words, do I have enough information to
  //     solve the problem? (You may not be able to
  //     answer this question until you set about solving
  //     the problem. That's okay; it's still worth
  //     considering the question at the this early stage)
  //
  //       - it may be zero, int, float, infinity etc.
  //
  //  5.  How should I label the important pieces of data
  //     that are a part of the problem?
  //       - numbers may be num1, num2
  //       - function addTwoNumbers()
  //       - return result...
})();

/*             Step 2 Concrete Examples                 */

// Problem Solving:
//  + Understand the problem
//  + Explore concrete examples

// Explore examples
//  + Start with Simple Examples
//  + Progress to More Complex Examples
//  + Explore Examples with Empty Inputs
//  + Explore Examples with Invalid Inputs

(() => {
  // //  Write a function which takes in a string
  // // and returns counts of each character in
  // // the string
  // //
  // // My basic approach
  // //
  // // 1. Can I restate the problem in my own words?
  // //     - Unique symbols counter
  // // 2. What are the inputs that go into the problem?
  // //     - Strings of length [1; infinity)
  // // 3. What are the outputs that should come from
  // //     the solution of the problem?
  // //     - object with pairs 'char' - 'number'
  // // 4. Can the outputs be determined from the inputs?
  // //     - hardly
  // // 5. How should I label the important pieces of data
  // //     that are a part of the problem?
  // //     - String inputString, Object charsFrequency,
  // //     - countCharsFrequency
  // const inputString = 'Hello, world!';
  // let charsFrequency = {};
  // function countCharsFrequency(str) {
  //   let strArr = [...str];
  //   strArr.forEach((char) => {
  //     if (!charsFrequency[char]) {
  //       charsFrequency[char] = 1;
  //     } else {
  //       charsFrequency[char]++;
  //     }
  //     return charsFrequency;
  //   });
  // }
  // countCharsFrequency(inputString);
  // console.log(charsFrequency);
  // // { H: 1, e: 1, l: 3, o: 2, ',': 1, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
})();

(() => {
  // //  Write a function which takes in a string
  // // and returns counts of each character in
  // // the string
  // // Author's approach
  // //  + Start with Simple Examples
  // charCount('aaaa'); // {a:4}
  // charCount('hello'); // {h:1, e:1, l:2, o:1}
  // //  + Progress to More Complex Examples
  // ('my phone number is 182763'); // includes numbers
  // ('Hello hi'); // includes lower-, uppercase
  // //  + Explore Examples with Empty Inputs
  // charCount();
  // charCount('');
  // //  + Explore Examples with Invalid Inputs
  // charCount(12345);
})();

/*               Step 3 Break It Down               */

//  Problem Solving

// + Understand the Problem
// + Expore Concrete Examples
// + Break It Down

//                   Break It Down
//           Explicitly write out the steps
//                 you need to take.
//
// This forces you to think about the code you'll write
//     before you write it, and helps you catch any
//   lingering conceptual issues or misunderstandings
//  before you dive in and have to worry about details
//           (e.g. language syntax as well).

(() => {
  // // Write a function which takes in a string
  // // and returns counts of each character in
  // // the string.
  // charCount('aaaa');
  // charCount('hello');
  // charCount('Your PIN number is 1234!');
  // function charCount(str) {
  //   // do something
  //   // return an object with keys that are lowercase
  //   //  alphanumeric characters in the string;
  //   //  values should be the counts for those characters
  // }
  // function charCount(str) {
  //   // make object to return the string
  //   // loop over string, for each character...
  //   // if the char is a number/letter AND is a key
  //   //   in object, add one to count
  //   // if the char is a number/letter AND is not
  //   //   in object, add it to object and set value to 1
  //   // if char is something else (space, period, etc.)
  //   //   don't do anything.
  //   // return object at the end
  // }
})();

/*               Step 4 Solve or Simplify               */

//  Problem Solving

// + Understand the Problem
// + Expore Concrete Examples
// + Break It Down
// + Solve/Simplify

// Solve the problem. If you can't...
// Solve a simpler problem.

// SIMPLIFY

// + Find the core difficulty in what
//   you're trying to do.
// + Temporarily ignore that difficulty.
// + Write a simplified solution.
// + Then incorporate that difficulty back in.

(() => {
  // // Write a function which takes in a string
  // // and returns counts of each character in
  // // the string.
  // function charCount(str) {
  //   // do something
  //   // return an object with keys that are lowercase
  //   //  alphanumeric characters in the string;
  //   //  values should be the counts for those characters
  // }
  // function charCount(str) {
  //   // make object to return the string
  //   var result = {};
  //   // loop over string, for each character...
  //   for (var i = 0; i < str.length; i++) {
  //     var char = str[i].toLowerCase();
  //     // if the char is a number/letter AND is a key
  //     //   in object, add one to count
  //     if (result[char] > 0) {
  //       result[char]++;
  //     }
  //     // if the char is a number/letter AND is not
  //     //   in object, add it to object and set value to 1
  //     else {
  //       result[char] = 1;
  //     }
  //   }
  //   // if char is something else (space, period, etc.)
  //   //   don't do anything.
  //   // return object at the end
  //   console.log(result);
  //   return result;
  // }
  // charCount('aaaa');
  // charCount('hello');
  // charCount('Your PIN number is 1234!');
})();

/*             Step 5 Look Back and Refactor            */

//  Problem Solving

// + Understand the Problem
// + Expore Concrete Examples
// + Break It Down
// + Solve/Simplify
// + Look Back and Refactor

// Refactoring Questions

// + Can you check the result?
// + Can you derive the result differently?
// + Can you understand it at a glance?
// + Can you use the result or method for
//   some other problem?
// + Can you improve the performance of your solution?
// + Can you think of other ways to refactor?
// + How have other people solved this problem?

(() => {
  // Write a function which takes in a string
  // and returns counts of each character in
  // the string.
  // function charCount(str) {
  //   var obj = {};
  //   for (var i = 0; i < str.length; i++) {
  //     var char = str[i].toLowerCase();
  //     if (/[a-z0-9]/.test(char)) {
  //       if (obj[char] > 0) {
  //         obj[char]++;
  //       } else {
  //         obj[char] = 1;
  //       }
  //     }
  //     return obj;
  //   }
  // }
  // function charCount(str) {
  //   var obj = {};
  //   for (var char of str) {
  //     char = char.toLowerCase();
  //     if (/[a-z0-9]/.test(char)) {
  //       if (obj[char] > 0) {
  //         obj[char]++;
  //       } else {
  //         obj[char] = 1;
  //       }
  //     }
  //   }
  //   return obj;
  // }
  // function charCount(str) {
  //   let obj = {};
  //   for (let char of str) {
  //     char = char.toLowerCase();
  //     if (/[a-z0-9]/.test(char)) {
  //       // obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
  //       obj[char] = ++obj[char] || 1;
  //     }
  //   }
  //   return obj;
  // }
  // function isAlphaNumeric(char) {
  //   var code = char.charCodeAt(0);
  //   if (
  //     !(code > 47 && code < 58) && // numeric (0-9)
  //     !(code > 64 && code < 91) && // upper alpha (A-Z)
  //     !(code > 96 && code < 123) // lower alpha (a-z)
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }
  // function charCount(str) {
  //   let obj = {};
  //   for (var char of str) {
  //     if (isAlphaNumeric(char)) {
  //       // obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
  //       char = char.toLowerCase();
  //       obj[char] = ++obj[char] || 1;
  //     }
  //   }
  //   return obj;
  // }
  // console.log(charCount('aaaa'));
  // console.log(charCount('hello'));
  // console.log(charCount('Your PIN number is 1234!'));
})();
