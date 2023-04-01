//? SORT Task: Write a function called maxDifference that takes
//? in an array of numbers and returns the maximum difference
//? between any two elements in the array.
//? The difference between two elements is the absolute
//? value of their difference.
//? For example, the maximum difference between the
//? elements in the array [1, 2, 3, 4] is 3, because 4 - 1 = 3.
//? The maximum difference between the elements in the array
//? [4, 2, 1, 3] is 3 as well, because 4 - 1 = 3.

// const arr = [1, 3, 2, 4, 5, 8, 1];

// function maxDifference(numbers) {
//   const sorted = numbers.sort((a, b) => b - a);
//   return sorted[0] - sorted[sorted.length - 1];
// }
// console.log(maxDifference(arr));

//? REDUCE Task: Write a function called longestWord that takes in an
//? array of strings and returns the longest string in the array.
//? For example, the following input array:
//? ['cat', 'dog', 'fish', 'zebra', 'elephant']

// reduce - kai norim sumazint array iki kokios nors reiksmes;

// const animals = ["cat", "dog", "fish", "zebra", "elephant"];

// function longestWord(words) {
//   return words.reduce((longest, current) => {
//     if (!longest) {
//       return current;
//     }
//     if (longest.length < current.length) {
//       return current;
//     }
//   });
// }

// console.log(longestWord(animals));

//? FILTER Task: Write a function called evenNumbers that
//? takes in an array of numbers and returns a new array
//? containing only the even numbers from the input array.
//? For example, the following input array: [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5, 6];

// function evenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// console.log(evenNumbers(numbers));

//? FOR EACH Task: Use the foreach method to calculate
//? the sum of the following array of numbers:
//? let numbers = [1, 2, 3, 4, 5];
//? cia suveiktu ir reduce
//? foreach'e nieko returnint negalim. Jeigu for'a

// let numbers1 = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers1.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

// //so for butu ilgiau:
// // for (let i = 0; i < numbers1.length; i++) {
// //     sum += numbers1[i];
// // }

//? FIND Task: Use the find method to find the first element
//? in the following array that is a multiple of 4:
//? let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//? find grazina tik viena pirma elementa, kuris atitinka salyga

// let numbers2 = [1, 2, 3, 8, 5, 6, 7, 8, 9];

// const number = numbers2.find((number) => number % 4 === 0);
// console.log(number);

//? MAP Use the map method to create a new array that contains
//? the square of each number in the following array:
//? let numbers = [1, 2, 3, 4, 5];
//? map pagamina nauja array. Priima antra parametra

// let numbers3 = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers3.map((num) => {
//   return num * num;
// });

// console.log(squaredNumbers);

//? SORT Task: Use the sort method to sort the following array
//? of objects by their age property in ascending order:
//? let people = [
//?
//?  { name: "John", age: 30 },
//?  { name: "Jane", age: 25 },
//?  { name: "Bob", age: 35 },
//?  { name: "Alice", age: 20 }
//? ];
//? galim ir su objektais naudoti

// let people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Alice", age: 20 },
// ];
// console.log(people.sort((a, b) => a.age - b.age));

//? REDUCE Task: Use the reduce method to calculate the
//? average age of the following array of objects:
//? let people = [
//?   { name: "John", age: 30 },
//?  { name: "Jane", age: 25 },
//?  { name: "Bob", age: 35 },
//?  { name: "Alice", age: 20 }
//? ];

// let people1 = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Alice", age: 20 },
// ];

// const sum1 = people1.reduce((acc, person) => {
//   return acc + person.age;
// }, 0);

// const avg = sum1 / people1.length;
// console.log(avg);

//? FILTER Task: Use the filter method to create a new array
//? that contains only the objects in the following array
//? that have a score property greater than or equal to 70:
//? let students = [
//?  { name: "John", score: 75 },
//?  { name: "Jane", score: 65 },
//?  { name: "Bob", score: 85 },
//?  { name: "Alice", score: 50 },
//?  { name: "Mike", score: 90 }
//? ];

// let students = [
//   { name: "John", score: 75 },
//   { name: "Jane", score: 65 },
//   { name: "Bob", score: 85 },
//   { name: "Alice", score: 50 },
//   { name: "Mike", score: 90 },
// ];

// const bestStudents = students.filter((student) => student.score >= 70);
// console.log(bestStudents);

//? FIND Task: Use the find method to find the first object
//? in the following array that has a name property with
//? the value "John":
//? let people = [
//?  { name: "Jane", age: 21 },
//?  { name: "John", age: 30 },
//?  { name: "Mary", age: 25 }
//? ];

// let people2 = [
//   { name: "Jane", age: 21 },
//   { name: "John", age: 30 },
//   { name: "Mary", age: 25 },
// ];

// const firstJohn = people2.find(
//   (person) => person.name.toLowerCase() === "john"
// );
// if (firstJohn) {
//   console.log(firstJohn);
// } else {
//   console.log("There is no John found");
// }
// // findIndex grazintu indeksa, kelintas jis yra musu array

//? MAP Task: Use the map method to create a new array that
//? contains the full names of the following people:
//? let people = [
//?  { firstName: "John", lastName: "Doe" },
//?  { firstName: "Jane", lastName: "Smith" },
//?  { firstName: "Bob", lastName: "Jones" }
//? ];

// let people3 = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Bob", lastName: "Jones" },
// ];

// const fullNames = people3.map((person) => {
//   return person.firstName + " " + person.lastName;
// });

// console.log(fullNames);

//? SORT Task: Write a function called sortByLength that
//? takes in an array of strings and returns a new array
//? containing the same strings, sorted by length in
//? ascending order.
//? ['cat', 'dog', 'fish', 'zebra', 'elephant']

// const animals = ["elephant", "cat", "dog", "fish", "zebra"];

// const sortedAnimals = animals.sort((a, b) => a.length - b.length);
// console.log(sortedAnimals);

//? REDUCE Task: Write a function called sumOfOddNumbers that takes
//? in an array of numbers and returns the sum of
//? all odd numbers in the array.
//? For example, the following input array:
//? [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];

// function sumOfOddNumbers(num) {
//   return num.reduce((acc, x) => {
//     if (x % 2 !== 0) {
//       return acc + x;
//     } else {
//       return acc;
//     }
//   }, 0);
// }

// console.log(sumOfOddNumbers(numbers));

//? FILTER Task: Write a function called positiveNumbers that takes
//? in an array of numbers and returns a new array
//? containing only the positive numbers from the input array.
//? For example, the following input array:
//? [1, -2, 3, -4, 5]

// let array = [1, -2, 3, -4, 5];

// function positiveNumbers(arr) {
//   return arr.filter((number) => number > 0);
// }

// console.log(positiveNumbers(array));

//? FIND'AS FIND'E Task: Use the find method to find the first object in
//? the following array of arrays that has a name property
//? with the value "John":

let groups = [
  [
    { name: "Jane", age: 21 },
    { name: "John", age: 30 },
  ],
  [
    { name: "Bob", age: 25 },
    { name: "Mary", age: 35 },
  ],
  [
    { name: "Alice", age: 40 },
    { name: "Mike", age: 45 },
  ],
];

const john = groups.find((group) => {
  return group.find((person) => person.name === "John");
});

console.log(john);
