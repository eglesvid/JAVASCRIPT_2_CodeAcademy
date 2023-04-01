//! Promises - pazadai

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(resolve, 3000, "pazadas ivykdytas");
  } else reject("nepavyko");
});

// console.log(promise);

// setTimeout(() => console.log(promise), 4000);

//? .then consume promise

// promise.then((rezultatas) => {
//   console.log(rezultatas);
// });

//? promise then chaining

// promise.then((res) => res + " viskas gerai").then((res2) => console.log(res2)); //turetu enter paspaudus .then skirtingose eilutese gautis...

//? reject scenario

// promise
//   .then((rezultatas) => {
//     console.log(rezultatas);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? Promise.all - wait for all promises to finish (pvz. su jei is dvieju vietu duomenis reik gaut)

// const promise2 = new Promise((resolve) => {
//   setTimeout(resolve, 500, "start");
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(resolve, 1500, "second promise fulfilled");
// });

// const promise4 = new Promise((resolve) => {
//   setTimeout(resolve, 300, "last promise fulfilled");
// });

// Promise.all([promise2, promise3, promise4]).then((data) => console.log(data));

//? example with and without promise;
// console.log(1);
// const waitFor = () => {
//   for (let i = 0; i < 10000000000; i++) {
//     (5 * 559) / 12;
//   }
//   return "Uff, that was tuff";
// };
// console.log(waitFor());
// console.log(3);

//pvz:
// console.log(1);

// const promiseTime = new Promise((resolve) => {
//   for (let i = 0; i < 10000000000; i++) {
//     (5 * 559) / 12;
//   }
//   resolve("Uff that was not so long to wait");
// }); //sukurem nauja gija, kad neblokuotu viso musu veikimo

// const result = promiseTime.then((response) => console.log(response));

// console.log(3);

//? JSON

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log("Error got in fetching post: " + e))
  .finally(() => console.log("Fetching finished")); //finally visada yra ivykdomas
