// // ============================================
// // normal function with 'function' keyword
// function addNumbers(a, b) {
//     return a + b;
// }

// const sum = addNumbers(2, 3) 
// console.log(sum) // logs 5

// // ============================================
// // arrow function
// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(2, 3)) // logs 5

// // Arrow functions do not have their own this keyword. 
// // Instead, they use the this keyword of the enclosing lexical scope (i.e. the scope where the function is defined). 
// // This can be useful for avoiding issues with the this keyword in nested functions or callback functions.

// // Arrow functions cannot be used as constructors (i.e. with the new keyword), 
// // since they do not have their own this keyword.

// // Arrow functions cannot be named (i.e. they are always anonymous), 
// // since they are defined using a variable assignment or as a property value.

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     greet: () => {
//         console.log('Hello, ' + this.fullName()); // Error: Cannot read property 'fullName' of undefined
//     },
//     seeThis() {
//         // console.log(this) // works

//         // (this.lastName) = function() { // still works
//         //     console.log(this)
//         // }

//         // setTimeout(function () { // doesn't work - local scope changes to setTimeout()
//         //     console.log(this);
//         // }, 1000);

//         // setTimeout(() => { // works - global scope is seeThis()
//         //     console.log(this);
//         // }, 1000);

//         // const innerFunction = function() { // doesn't work - the scoppe is innerFunction()
//         //     console.log(this)
//         // }

//         // innerFunction();
//     }               
// };
  
// person.greet();
// person.seeThis();

// This happens because the this keyword is treated differently in arrow functions.
// It is inherited from the parent scope whenever you call this. The this keyword from function points to the local object.

