// Plan:
// 1) let and const
// 2) const for the objects
// 3) naming conventions
// 4) scope

// // In ES6, you can declare variables using the let and const keywords in addition to the traditional var.
// // let is used to declare variables that can be reassigned later, while const is used to declare variables that cannot be reassigned.
// // It's generally recommended to use const by default, and only use let when you know the value of the variable will need to change.

// // ============================================
// // Declaring variables using let
// let x = 10;
// let y = "Hello, world!";
// x = 11; 
// console.log(x, y);

// // ============================================
// // Declaring variables using const
// const PI = 3.14159;
// const MY_NAME = "Alice";
// MY_NAME = "Bob";

// // ============================================
// // When you use the const keyword to declare a variable that references an object in JavaScript, 
// // the variable itself is immutable, meaning you cannot reassign it to a new object. 
// // However, the object it references is still mutable, meaning you can modify 
// // its properties or add new properties to it.
// const myObj = {
//     name: "Alice",
//     age: 30
// }

// // this is acceptable
// myObj.age = 31;

// // this will create an error!
// myObj = {
//     name: "Bob",
//     age: 25
// }

// // ============================================
// // Examples of variable names`
// let myVariable = 42;
// const myOtherVariable = "Hello, world!";
// let my_third_variable = true; // Not recommended naming convention
// let MyFourthVariable = "This is also not recommended"; // Not recommended naming convention

// // ============================================
// // Example of block-level scope with const
// const x = 30;
// function foo() {
//     const x = 10;
//     if (true) {
//         const y = 20;
//         console
//         console.log(x); // Output: 10
//         console.log(y); // Output: 20
//     }
//     console.log(x); // Output: 10
//     // console.log(y); // Output: ReferenceError: y is not defined
// }

// foo()
// console.log(x)

