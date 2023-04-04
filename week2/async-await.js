// // ============================================
// / promise object
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation succeeded */) {
//         resolve(result); // resolve the promise with the result
//     } else {
//         reject(error); // reject the promise with an error
//     }
// });

// myPromise.then(result => {
//     // handle the fulfilled result
// }).catch(error => {
//     // handle the rejected error
// });

// // The word “async” before a function means one simple thing: 
// // a function always returns a promise. Other values are wrapped in a resolved promise automatically.

// async function f() {
//     return 1;
// }

// f().then((ans) => {
//     console.log(ans)
// }); // 1

// // The keyword await makes JavaScript wait until that promise settles and returns its result.

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
// }
  
// f();

// // ============================================
// async function getData() {
//     try {
//         const response = await fetch('https://example.com/api/data');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// console.log('starting the fetch....')
// getData();

// console.log('meanwhile')
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 200)
// }

// // ==================================
// const response = fetch('https://example.com/api/data');
// response.then();