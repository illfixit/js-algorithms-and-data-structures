/*       Data Structures Introduction       */

/*      Which Data Structure is The Best       */

/*       ES2015 Class Syntax       */

//     Objectives

// + Explain what a class is
// + Understand how JavaScript implements
//    the idea of classes
// + Define terms like absctraction, en-
//    capsulation and polymorphism
// + Use ES2015 classes to implement data
//    structures

// What is a class?
//
// + A blurprint for creating objects with
//    pre-defined properties and methods

/* * * * * * * * * * * * * * * * * * * * * * * * *
 *  //  MDN description //                        *
 *                                                *
 * "JavaScript classes, introduced in ECMAScript  *
 *   2015, are primarily syntactical sugar over   *
 *   JavaScript's existing prototype-based        *
 *   inheritance.                                 *
 *                                                *
 *  The class syntax does not introduce a new     *
 *   object-oriented inheritance model            *
 *   to JavaScript."                              *
 * * * * * * * * * * * * * * * * * * * * * * * * */

/*       Data Structures The Class Keyword       */

//   The Syntax

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// The method to create new objects must be called
//  constructor

// The class keyword creates a constant, so you can
//  not redefine it.

// let firstStudent = new Student("Colt", "Steele");
// let secondStudent = new Student("Blue", "Steele");

(() => {
  // class Student {
  //   constructor(firstName, lastName, year) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.grade = year;
  //   }
  // }
  // let firstStudent = new Student('Colt', 'Steele', 3);
  // console.log(firstStudent); // > Student { firstName: 'Colt', lastName: 'Steele', grade: 3 }
  // let emil = new Student('Emil', 'Katz', 3);
  // console.log(emil); // Student { firstName: 'Emil', lastName: 'Katz', grade: 3 }
  // console.log(emil.firstName); // Emil
  // console.log(emil.lastName); // Katz
  // // class Tree {
  // // // some code
  // // }
  // // new Tree...
})();

/*     Data Structures Adding Instance Methods     */

// Instance Methods

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   }
// }
// let firstStudent = new firstStudent("Colt", "Steele");
// console.log(firstStudent.fullName()); // "Colt Steele"

// data = new Array(1,2,3);
// data.push(99);

(() => {
  // class Student {
  //   constructor(firstName, lastName, year) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.grade = year;
  //     this.tardies = 0;
  //     this.scores = [];
  //   }
  //   fullName() {
  //     return `Your full name is ${this.firstName} ${this.lastName}`;
  //   }
  //   markLate() {
  //     this.tardies++;
  //     if (this.tardies >= 3) {
  //       return 'YOU ARE EXPELLED!!!!';
  //     }
  //     return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  //   }
  //   addScore(score) {
  //     this.scores.push(score);
  //     return this.scores;
  //   }
  //   calculateAverage() {
  //     let sum = this.scores.reduce(function (a, b) {
  //       return a + b;
  //     });
  //     return sum / this.scores.length;
  //   }
  // }
  // let firstStudent = new Student('Colt', 'Steele', 3);
  // let secondStudent = new Student('Blue', 'Steele');
  // console.log(firstStudent.markLate()); // Colt Steele has been late 1 times
  // console.log(firstStudent.markLate()); // Colt Steele has been late 2 times
  // console.log(firstStudent.markLate()); // YOU ARE EXPELLED!!!!
  // console.log(secondStudent.scores); // []
  // secondStudent.addScore(92);
  // console.log(secondStudent.scores); // [92]
  // secondStudent.addScore(87);
  // console.log(secondStudent.scores); // [92, 87]
  // console.log(secondStudent.calculateAverage()); // 89.5
  // console.log(secondStudent.calculateAverage); // [Function: calculateAverage]
})();

/** * * * * * * * * * * * * * * * * * * * * * * * *
 *        MDN description. Static methods.         *
 *                                                 *
 * The static keyword defines a static method for  *
 *  a class. Static methods are called without     *
 *  instantiating thier class and CANNOT be called *
 *  through a class instance. Static methods are   *
 *  often used to create utility functions for an  *
 *  application                                    *
 * * * * * * * * * * * * * * * * * * * * * * * * **/

(() => {
  // class Student {
  //   constructor(firstName, lastName, year) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.grade = year;
  //     this.tardies = 0;
  //     this.scores = [];
  //   }
  //   fullName() {
  //     return `Your full name is ${this.firstName} ${this.lastName}`;
  //   }
  //   static enrollStudents(...students) {
  //     return 'ENROLLING STUDENTS!';
  //   }
  // }
  // let firstStudent = new Student('Colt', 'Steele');
  // let secondStudent = new Student('Blue', 'Steele');
  // // firstStudent.enrollStudents();
  // // firstStudent.enrollStudents is not a function
  // console.log(Student.enrollStudents([firstStudent, secondStudent])); // ENROLLING STUDENTS!
})();

(() => {
  // // Example from MDN
  // class Point {
  //   constructor(x, y) {
  //     this.x = x;
  //     this.y = y;
  //   }
  //   static distance(a, b) {
  //     const dx = a.x - b.x;
  //     const dy = a.y - b.y;
  //     return Math.hypot(dx, dy);
  //   }
  // }
  // const p1 = new Point(5, 5);
  // const p2 = new Point(10, 10);
  // console.log(Point.distance(p1, p2)); // 7.0710678118654755
})();

// We'll be using the constructor and instance
//  methods quite a bit && almost never be using
//  static methods.

// class DataStructure() {
//   constructor() {
//   // what default properties should it have?
//   }
//   someInstanceMethod() {
//     // What should each object created from
//     //  this class be able to do?
//   }
// }

//      One gotcha with `this`
// Inside all of our instance methods and
//  constructor, the keyword `this` refers
//  to the object created from that class
//  (also known as an instance)

//      Recap
//
// * Classes are blueprints that when created
//    make objects known as instances
// * Classes are created with the new keyword
// * The constructor function is a special
//    function that gets run when the class
//    is instantiated
// * Instance methods can be added to classes
//    similar to methods in objects
// * Class methods can be added using the
//    static keyword
