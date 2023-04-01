//? UZDUOTIS NR. 4
//? Naudojant ES6 klases sukurkite automobilių objektų kūrimo
//? konstruktorių (Car), kuris turės šias savybes:
//? 1. make; 2. model; 3. year
//? ir metodus:
//? 1. getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
//? 2. getAge, kuris gražins
//? “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis
//? arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis
//? (šio metodo logikai naudokite ternaryoperatorių ir Date() metodą).
//?
//? Naudojant ES6 subklases sukurkite motociklų objektų kūrimo
//? konstruktorių (Motorcycle), kuris turės visas automobilių objektų
//? kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę:
//? 1. wheels(kurio vertė bus number).
//? Ir metodą:
//? 1. getWheelsNumber, kuris grąžins “motociklas turi 3 ratus”, jei wheelsvertė bus 3
//? ir “motociklas turi 2 ratus”, jei wheelsvertė bus 2
//? (šio metodo logikai naudokite elseifoperatorių).
//?
//? Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getIntroduction() {
    return this.make + " " + this.model;
  }
  getAge() {
    return new Date().getFullYear() - this.year <= 10
      ? `10 metų arba naujesnis`
      : `11 metų arba senesnis`;
  }
}

const car = new Car("BMW", "X5", 2023);
console.log(car.getAge());

class Motorcycle extends Car {
  constructor(make, model, year, wheels) {
    super(make, model, year);
    this.wheels = wheels;
  }
  getWheelsNumber() {
    if (this.wheels === 3) {
      return "motociklas turi 3 ratus";
    } else if (this.wheels === 2) {
      return "motociklas turi 2 ratus";
    } else {
      return "The motorcycle has neither two nor three wheels";
    }
  }
}

const motorcycle = new Motorcycle("BMW", "X5", 2023, 4);
console.log(motorcycle.getWheelsNumber());

// AINO ATS:
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getIntroduction() {
//     return `Make: ${this.make}\nModel: ${this.model}`;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.year <= 10
//       ? `10 metu arba naujesnis`
//       : `11 metu arba senesnis`;
//   }
// }

// class Motorcycle extends Car {
//   constructor(make, model, year, wheels) {
//     super(make, model, year);
//     this.wheels = wheels;
//   }
//   getWheelsNumber() {
//     if (this.wheels === 3) {
//       return "motociklas turi 3 ratus";
//     } else if (this.wheels === 2) {
//       return "motociklas turi 2 ratus";
//     }
//   }
// }

//MARIJAUS ATS:
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getIntroduction() {
//     return `The car is ${this.make} ${this.model}`;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.year > 10
//       ? "11 metų arba senesnis"
//       : "10 metų arba naujesnis";
//   }
// }

// const myCar = new Car("VW", "Passat", 2009);
// console.log(myCar);
// console.log(myCar.getIntroduction());
// console.log(myCar.getAge());

// const newCar = new Car("VW", "Passat", 2022);
// console.log(newCar.getAge());

// class Motorcycle extends Car {
//   constructor(make, model, year, wheels) {
//     super(make, model, year);
//     this.wheels = wheels;
//   }
//   getWheelsNumber() {
//     if (this.wheels === 3) {
//       return "Motociklas turi 3 ratus";
//     } else if (this.wheels === 2) {
//       return "Motociklas turi 2 ratus";
//     }
//     return "Keistas motociklas su neįprastu ratų skaičiumi";
//   }
// }

// const normalMotorcycle = new Motorcycle("Kawasaki", "R1", 2015, 2);
// console.log(normalMotorcycle);
// console.log(normalMotorcycle.getWheelsNumber());
// console.log(normalMotorcycle.getAge());

// const strangeMotorcycle = new Motorcycle("KK", "R2", 2005, 1);
// console.log(strangeMotorcycle.getWheelsNumber());
