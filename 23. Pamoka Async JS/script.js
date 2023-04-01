// console.log(asdf);

// asdf;

// asdasd;

//! Promise - budas, kaip tureti sinchronini koda, kuris nesustabdo viso musu programos veikimo. Dazniausiai naudojami daryti rquestus arba skaityti failus (sitas nlb mums)
//padarom uzklausa i serveri
//kad galetume greiciau atlikinet visas savo funkcijas
//dazniausiai mes tsg naudojam promise, kuriuos jau uz mus sukuria
//promise dazniausiai naudojam su fetch

// console.log("first line of code");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise happened");
//     resolve();
//   }, 2000);
// });

// //kada promise buvo resolved, tada vyksta then/kai resolvinam issikviecia pirmas then
// myPromise
//   .then(() => {
//     console.log("first then happened"); //dazniausiai pirmam konvertuojam i JSON
//   })
//   .then(() => {
//     console.log("second then happened"); //tada vel kazka darom... zodziu, daznai then naudojamas, galim kiek norim ju turet
//   });

// //? Promisai buna triju stadiju:
// //? In progress
// //? Rejected
// //? Resolved

// console.log("end of code");

//? Jeigu rejected:

// console.log("first line of code");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise happened");
//     reject();
//   }, 2000);
// });

// //kada promise buvo resolved, tada vyksta then/kai resolvinam issikviecia pirmas then
// myPromise
//   .then(() => {
//     console.log("first then happened"); //dazniausiai pirmam konvertuojam i JSON
//   })
//   .then(() => {
//     console.log("second then happened"); //tada vel kazka darom... zodziu, daznai then naudojamas, galim kiek norim ju turet. Then vyksta tik tada, kai resolvinam
//   })
//   .catch(() => {
//     console.log("Catch happened");
//   }) //catch vyksta tik tada, kai rejectinam
//   .finally(() => {
//     console.log("finally happened");
//   }); //finally ivyks bet kuriuo atveju, visada

// //? Promisai buna triju stadiju:
// //? In progress
// //? Rejected
// //? Resolved

// console.log("end of code");

console.log("first line of code");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise happened");
    reject("some data");
  }, 2000);
});

myPromise
  .then((data) => {
    console.log("first then happened", data);
    return "some processed data";
  })
  .then((data) => {
    console.log("second then happened", data);
    return "some more data";
  })
  .then((data) => {
    console.log("third then happened", data);
  })
  .catch((err) => {
    console.log("Catch happened", err);
  })
  .catch((err) => {
    console.log("Second catch happened", err);
  })
  .finally(() => {
    console.log("finally happened");
  }); //i finally negaliu pasiduoti jokios info

console.log("end of code");
