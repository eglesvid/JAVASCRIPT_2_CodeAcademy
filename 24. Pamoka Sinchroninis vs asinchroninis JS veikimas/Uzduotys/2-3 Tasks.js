//? TASK 2
//? Promises – then.
//? Susikurkite naują promise, kuris generuoja Math.random() skaičių,
//? ir jei gaunamas skaičius daugiau nei 0.25,
//? darytų resolve su tekstu 'You have enough money for payphone',
//? o jei mažiau - reject su tekstu 'Talk to yourself this time'
//? Iškvieskite promise kelis kartus ir pažiūrėkite,
//? ar gaunate skirtingus variantus ir pavyksta juos išsiloginti,
//? naudojant .then ir .catch;

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.25) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then((result) => {
//     console.log("You have enough money for payphone");
//   })
//   .catch((error) => {
//     console.log("Talk to yourself this time");
//   });

//Kestucio ats:
// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   console.log(randomNumber);
//   if (randomNumber > 0.25) {
//     resolve("You have enough money for payphone");
//   } else {
//     reject("Talk to yourself this time");
//   }
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? TASK 3
//? Promises – async/await.
//? Perrašyti 2 užduotį, kad naudotų async/await.

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.25) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});

const getMathValue = async () => {
  try {
    console.log(await promise);
  } catch (err) {
    console.log("Rejected with message " + err);
  }
};

getMathValue();
