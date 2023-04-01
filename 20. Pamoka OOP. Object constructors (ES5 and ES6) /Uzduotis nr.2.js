//? UZDUOTIS NR. 2
//? Naudojant ES6 klases sukurkite objekto Filmas (Movie)
//? kūrimo konstruktorių, kuris turės šias savybes:
//? 1. name; 2. year; 3. director; 4. budget; 5. income.
//? ir metodus:
//? 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director);
//? 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
//? Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }
  getIntroduction() {
    return `${this.name}, ${this.year}, ${this.director}`;
  }

  getProfit() {
    return this.income - this.budget;
  }
}

const movie1 = new Movie("Harry Potter", 2001, "David Yates", 100, 1000);
const movie2 = new Movie("Avatar", 2009, "James Cameron", 200, 2000);

console.log(movie1);
console.log(movie2);
console.log(movie1.getIntroduction());
console.log(movie1.getProfit());

//Marijaus ats:
// class Movie {
//   constructor(name, year, director, budget, income) {
//     this.name = name;
//     this.year = year;
//     this.director = director;
//     this.budget = budget;
//     this.income = income;
//   }
//   getIntroduction() {
//     return `Movie ${this.name} was created on ${this.year} and directed by ${this.director}`;
//   }
//   getProfit() {
//     const balance = this.income - this.budget;
//     return balance > 0
//       ? `Movie has earned: ${balance}`
//       : `Movie lost: ${balance}`;
//   }
// }

// const titanicMovie = new Movie("Titanic", 1999, "Cameron", 20000000, 150000000);
// const badMovie = new Movie("Bad Movie", 2000, "Putin", 255555555, 1000);

// console.log(titanicMovie);
// console.log(titanicMovie.getIntroduction());
// console.log(titanicMovie.getProfit());

// console.log(badMovie);
// console.log(badMovie.getIntroduction());
// console.log(badMovie.getProfit());
