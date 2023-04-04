// // =============================
// // Primitive data types
// const myUndefined = undefined; // has not been assigned a value
// const myNull = null; // deliberate null-value
// const myBoolean = true; // represents true/false values
// const myNumber = 42; // numeric types (including 'Infinity', '-Infinity', 'NaN')
// const myString = "Hello, world!"; // testual data
// const mySymbol = Symbol("mySymbol"); // unique identifier

// // Object data type
// const myObject = { 
//     name: "Alice", 
//     age: 30, 
//     isStudent: true 
// }; // collection of key-value properties

// // =============================
// // difference between undefined and null
// // null represents a deliberate non-value, meaning that a variable has been explicitly set to have no value.
// // undefined represents a value that is not yet defined, meaning that a variable has been declared but not yet assigned a value.
// let myVar1 = null;
// console.log(myVar1); // Output: null

// let myVar2;
// console.log(myVar2); // Output: undefined

// // =============================
// // example of NaN and undefined
// function myFunction(x, y) {
//     console.log(y)
//     console.log(x + y);
// }
  
// myFunction(5); // Output: NaN

// // =============================
// // example of Infinity and -Infinity
// console.log(1 / 0); // Output: Infinity
// console.log(-1 / 0); // Output: -Infinity

// // =============================
// // boolean representation of some types
// console.log(Boolean(undefined))
// console.log(Boolean(Infinity))
// console.log(Boolean(-Infinity))
// console.log(Boolean(NaN))

// // ============================================
// // arithmetic operations with numbers
// const x = 5;
// const y = 3;
// console.log(x + y); // Output: 8
// console.log(x - y); // Output: 2
// console.log(x * y); // Output: 15
// console.log(x / y); // Output: 1.6666666666666667
// console.log(x % y); // Output: 2

// // ============================================
// // arithmetic operations with strings

// // For strings, the + operator is used for concatenation:
// const str1 = "Hello";
// const str2 = "world";
// console.log(str1 + " " + str2); // Output: "Hello world"

// //  if either operand of the + operator is a string, 
// // the other operand will be automatically converted to a string
// console.log("5" + 3); // Output: "53"
// console.log(5 + "3"); // Output: "53"

// // the remaining operators work with numbers only, 
// // therefore all the strings will be converted to numbers
// console.log("5" - 3); // Output: 2
// console.log("5" * 3); // Output: 15
// console.log("5" / 3); // Output: 1.6666666666666667
// console.log("5" % 3); // Output: 2

// // NaN example
// console.log("hello" - 3); // Output: NaN
