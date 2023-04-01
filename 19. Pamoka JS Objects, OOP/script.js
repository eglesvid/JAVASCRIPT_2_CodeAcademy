//? Uzduotis nr. 1
//? Using the doors example from the previous slide,
//? create the close() method, which would also check
//? if doors are already closed.
//? Make a method call and verify if it works.

// let doors = {
//   color: "brown",
//   isOpen: false,
//   open: function () {
//     if (doors.isOpen === true) {
//       return "Doors are open";
//     } else {
//       doors.isOpen = true;
//       return "I am opening the door";
//     }
//   },
//   close: function () {
//     if (doors.isOpen === false) {
//       return "Doors are closed";
//     } else {
//       doors.isOpen = false;
//       return "I am closing the door";
//     }
//   },
// };

// console.log(doors.open());
// console.log(doors.close());

// console.log(doors.color);
// console.log(doors["color"]); //same as above

// let doors = {
//   color: "brown",
//   isOpen: false,
//   open: function () {
//     if (this.isOpen === true) {
//       return "Doors are open";
//     } else {
//       this.isOpen = true;
//       return "I am opening the door";
//     }
//   },
//   close: function () {
//     if (this.isOpen === false) {
//       return "Doors are closed";
//     } else {
//       this.isOpen = false;
//       return "I am closing the door";
//     }
//   },
// }; //ne visada zinom kintomojo pavadinima, todel this pravercia. Ji naudojam objekto viduj, kad tiesiog prie jo prieitume. Jei naudosim uz objekto, referins i global object

// console.log(this);

// console.log(doors.open());
// console.log(doors.close());

//? Quiz
//? 1. c, d
//? 2. a, c

//? Uzduotis nr. 2
//? Add aprintAccountSummary()method that
//? returns the followingaccount message:
//? Welcome!
//? Your balance is currently $1000and your interest rate is 1%.

// const savingsAccount = {
//   balance: 1000,
//   interestRate: 1,
//   deposit: function (amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   },
//   withdraw: function (amount) {
//     const verifyBalance = this.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       this.balance -= amount;
//     }
//   },
//   printAccountSummary: function () {
//     console.log(
//       `Welcome! \nYour balance is currently ${this.balance} and your interest rate is ${this.interestRate}%`
//     );
//   },
// };

// savingsAccount.printAccountSummary();

//? Uzduotis nr. 3
//? Try to use withdraw()method, e.g.with argument 100$,
//? what does it return?
//? ats virsuj

// const savingsAccount = {
//   balance: 1000,
//   interestRate: 1,
//   deposit: function (amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   },
//   withdraw: function (amount) {
//     const verifyBalance = this.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       this.balance -= amount;
//       return `You withdraw ${amount} \nYou have $${this.balance} in your account left`;
//     }
//     if (verifyBalance < 0) {
//       return `Ups you don't have $${amount} in your account left`;
//     }
//   },
//   printAccountSummary: function () {
//     console.log(
//       `Welcome! \nYour balance is currently ${this.balance} and your interest rate is ${this.interestRate}%`
//     );
//   },
// };
// console.log(savingsAccount.withdraw(200));

// savingsAccount.printAccountSummary();

//? Uzduotis nr. 4
//? Create an object called facebookProfile
//? The object should have 3 properties:
//? −your name;
//? −the number of friends you have;
//? −an array of messages you've posted (as strings);
//?
//? The object should also have 4 methods:
//? −postMessage(message) – adds a new message string to the array;
//? −deleteMessage(index) – removes the message corresponding
//? to the index provided;
//? −addFriend() – increases the friend count by 1;
//? −removeFriend() – decreases the friend count by 1.

// const facebookProfile = {
//   name: "Marius",
//   friendsAmount: 100,
//   messages: ["hello", "bye", "world"],
//   postMessage: function (message) {
//     if (message && typeof message === "string") {
//       this.messages.push(message);
//     }
//   },
//   deleteMessage: function (index) {
//     if (!(index > this.messages.length - 1)) {
//       this.messages[index] = undefined;
//       this.messages = this.messages.filter((message) => message);
//     }
//   },
//   addFriend: function () {
//     this.friendsAmount++;
//   },
//   removeFriend: function () {
//     this.friendsAmount--;
//   },
// };

// // console.log(facebookProfile.messages);
// facebookProfile.postMessage(78);
// facebookProfile.deleteMessage(0);

// console.log(facebookProfile.messages);
// facebookProfile.addFriend(1);
// console.log(facebookProfile.friendsAmount);

// facebookProfile.removeFriend(1);
// console.log(facebookProfile.friendsAmount);

//? Uzduotis nr. 5
//? Use the forEach() method to loop over the array and
//? print out the following car summaries using console.log.

// const cars = [
//   { type: "BMW", price: "30.000" },
//   { type: "Mercedes", price: "35.000" },
//   { type: "HONDA", price: "18.000" },
//   { type: "Volvo", price: "25.000" },
// ];

// cars.forEach((car) => {
//   console.log(`${car.type} car price ${car.price}`);
// });

//? KEYS

// const facebookProfile = {
//   name: "Marius",
//   friendsAmount: 100,
//   messages: ["hello", "bye", "world"],
//   postMessage: function (message) {
//     if (message && typeof message === "string") {
//       this.messages.push(message);
//     }
//   },
//   deleteMessage: function (index) {
//     if (!(index > this.messages.length - 1)) {
//       this.messages[index] = undefined;
//       this.messages = this.messages.filter((message) => message);
//     }
//   },
//   addFriend: function () {
//     this.friendsAmount++;
//   },
//   removeFriend: function () {
//     this.friendsAmount--;
//   },
// };

// const savingsAccount = {
//   balance: 1000,
//   interestRate: 1,
//   name: "Tadas",
//   deposit: function (amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   },
//   withdraw: function (amount) {
//     const verifyBalance = this.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       this.balance -= amount;
//       return `You withdraw ${amount} \nYou have $${this.balance} in your account left`;
//     }
//     if (verifyBalance < 0) {
//       return `Ups you don't have $${amount} in your account left`;
//     }
//   },
//   printAccountSummary: function () {
//     console.log(
//       `Welcome! \nYour balance is currently ${this.balance} and your interest rate is ${this.interestRate}%`
//     );
//   },
// };
// console.log(savingsAccount.withdraw(200));

// savingsAccount.printAccountSummary();

// console.log(Object.keys(facebookProfile));
// console.log(Object.values(facebookProfile));
// console.log(Object.entries(facebookProfile)); //atspausdina abu. Gaunam array su arrays
// console.log(Object.entries(facebookProfile)); //pagamina nauja objekta
// console.log(Object.assign(facebookProfile, savingsAccount)); //assign pakeicia ir originala, tas pats key permus
// console.log(facebookProfile);

//? Advanced operations, destructuring

//?PVZ.1
const obj = {
  name: "Marius",
  age: 26,
  lastName: "ajshda",
};

const arr = [{ test: "Labas", test2: "Labas labas" }];

// // const { name, age } = obj; //trumpinys, DAZNAI NAUDOJAMAS
// const name = obj.name;
// const name = obj.age;
// console.log(name);
// console.log(age);

//?PVZ.2, react'e dazniau naudojamas
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, , b] = arr;
// console.log(a);
// console.log(b);

//?PVZ.3
Object.assign(obj, ...arr); //kad nereiktu rasyt arr[1], arr[2] ir t.t.
// console.log(...arr); //atspausdina kaip atskiras reiksmes
console.log(obj);

//?PVZ. 4
// function printEverything(...strings) {
//   //visus parametrus, kuriuos paduoda vartotojas, sutraukia i viena array
//   console.log(strings);
// }
// printEverything("Labas", "ate", "asd");

//?PVZ. 5
function printEverything(target, antras, ...strings) {
  // sutraukia i array
  console.log(strings);
  console.log(target);
  console.log(antras);
}
printEverything("Labas", "ate", "asd");
