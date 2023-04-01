//! Object literals

// const book1 = {
//   title: "Harry Potter",
//   author: "J. K. Rowling",
//   year: 1997,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   },
// };

// const book2 = {
//   title: "1984",
//   author: "George Orwell",
//   year: 2000,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2);
// console.log(book2.getSummary());

// const book3 = new Object();
// book3.title = "1984"; //paprastas objektu kurimas, bet iprastai taip nekuriam

//! Constructor function CIA YRA PAGRINDAS

function Book(title, author, year) {
  this.title = title; //objekto viduj nurodo i pati objekta "this refers to object which is a property of"
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} on ${this.year}`;
  //   }; metodams reikia naudoti prototipus ir ju nerasyti objekto viduj -->
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} on ${this.year}`;
};

Book.prototype.revise = function (newAdditionYear) {
  this.year = newAdditionYear;
  return this.getSummary();
};

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997); // new Book kreipiasi i to paties pavadinimo konstruktoriaus funkcija
const book2 = new Book("1984", "George Orwell", 2000);
console.log(book1);
console.log(book1.revise(2022));
console.log(book1);

//! Prototype inheritance CIA JEI KARTAIS PRIREIKTU

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype); //metodu nepaveldim automatiskai, todel reikia susikurti rankom

const magazine = new Magazine("Naminukas", "Vaiga", 1999, "February");

console.log(magazine);

console.log(magazine.getSummary());
