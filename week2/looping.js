// // ============================================
// // for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // ============================================
// // while loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// // ============================================
// // do-while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// // ============================================
// // for ... in loop (used to loop through the properties of an object)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };
  
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// // ============================================
// // for ... of loop (used to loop through an iterable structure)
// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }

// // ============================================
// // forEach method (used to loop through the elements of iterable struct with callback function)
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);
// });

// // ============================================
// // continue operator
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

// // ============================================
// // break operator
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }