// // ============================================
// // map
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// // ============================================
// // reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // 15

// // ============================================
// // filter
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// // ============================================
// // chaining
// const numbers = [1, 2, 3, 4, 5];
// const average = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num * 2)
//   .reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
// console.log(average); // 4