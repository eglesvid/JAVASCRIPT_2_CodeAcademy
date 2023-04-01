//? UZDUOTIS NR. 3
//? Sutvarkykite kodą, kad pavyktų sukurti objektą Rabbit:

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit);

//Marijaus ats.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit);
// console.log(rabbit.created);
