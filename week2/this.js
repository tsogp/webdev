// // ============================================
// // In JavaScript, the this keyword refers to the object that the function or method is a property of, 
// // or the object that the function is called on. 
// // The value of this is determined at runtime and depends on how the function is called.

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };
  
// console.log(person.fullName()); // logs "John Doe"

// // ============================================
// // as a constructor function
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
  
//     fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
//   }
  
// const john = new Person('John', 'Doe');
// console.log(john.fullName()); // logs "John Doe"