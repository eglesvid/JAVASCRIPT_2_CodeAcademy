//? TASK 1
//? Susikurkite konstruktorių car, kuris priims
//? brand, model, engine ir turės metodą 'turnOn' -
//? kuris alertins 'vrooom'.
//? Sukurkite du objektus ir patikrinkite ar veikia.

// function Car(brand, model, engine) {
//   this.brand = brand; //cia yra properties ir juos prilyginsim paduotom reiksmem
//   this.model = model;
//   this.engine = engine;
//   this.turnOn = function () {
//     alert("vrooom");
//   };
// }

// const myCar = new Car("BMW", "X3", "electric");
// const yourCar = new Car("VW", "Arteon", "diesel");

// console.log(yourCar.engine);
// myCar.turnOn();

//? TASK 2
//? Pakoreguokite šį konstruktorių ir pridėkite papildomą
//? property 'basePrice' ir metodą 'getPrice'.
//? basePrice propertį įrašys sukuriant objektą, tačiau getPric
//? priklausimai nuo variklio išmes kokia yra galutinė kaina.
//? Jei variklis 'electric' - kaina bus +10,000;
//? jei 'diesel' +5,000;
//? jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  this.brand = brand; //cia yra properties ir juos prilyginsim paduotom reiksmem
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.getPrice = function () {
    let additionalPrice = 0;
    if (this.engine === "electric") {
      additionalPrice = 10000;
    } else if (this.engine === "diesel") {
      additionalPrice = 5000;
    }
    return this.basePrice + additionalPrice;
  };
  this.turnOn = function () {
    alert("vrooom");
  };
}

const myCar = new Car("BMW", "X3", "petrol", 40000);
console.log(myCar.getPrice());
