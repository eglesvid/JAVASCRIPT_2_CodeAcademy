//? UZDUOTIS NR. 1
//? Susikurkite objektų konstruktorių naudojant new pavadinimu Person,
//? kuris galės kurti objektus, kurie turės šias savybes (properties):
//? name, lastname, birthYear ir metodus (naudojant prototype),
//? kurių vienas parašys name + lastname,
//? o kitas parodys amžių.

function Person(name, lastname, birthYear) {
  this.name = name;
  this.lastname = lastname;
  this.birthYear = birthYear;
}

Person.prototype.getFullName = function getFullName() {
  return this.name + " " + this.lastname;
};
Person.prototype.getAge = function getAge() {
  return new Date().getFullYear() - `${this.birthYear}`;
};

const person = new Person("Egle", "Sviderskyte", 1999);
console.log(person.getFullName());
console.log(person.getAge());

// Emilijos
// function Person(name, lastname, birthYear) {
//   this.name = name;
//   this.lastname = lastname;
//   this.birthYear = birthYear;
// }

// Person.prototype.getFullName = function () {
//   return `${this.name} ${this.lastname}`;
// };
// Person.prototype.getYear = function () {
//   return new Date().getFullYear() - this.birthYear;
// };

// const person = new Person("Emilija", "Stefanovic", 2003);

// console.log(person.getFullName());

// console.log(person.getYear());
