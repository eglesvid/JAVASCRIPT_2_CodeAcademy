/*
RACING GAME

The racing game solution should have the following functionality:

Prompt the user for the number of cars and distance of the race, and validate that the input is a positive integer
Create a class for a car with properties for its id, speed, and distance traveled, and methods for accelerating, slowing down, and moving the car
Create car objects and add them to the page as elements with styles applied
Periodically accelerate or slow down each car
Move the cars a certain distance and check if any of them have reached the finish line, displaying a winner text if necessary
Add an info text field below each car to display its speed and distance traveled
*/

//! T 1. fn getUserInput() - paima is user numberOfCars ir distance;
//! T 2. Car class: props - id, speed, distance; methods - accelerate(howMuch), slowdown(howMuch), move();
//! M 3. fn drawCars() nupiešia tiek auto, kiek įvesta userio.
//! M 4. fn drawFinishLine()
//! T 5. fn pace() - nustatom greitį
//! M 6. fn move() - pajudinam;
//! T 7. Pastumkite visa lenktyniu zona zemiau laimetojo teksto;
//! T 8. Pridekite div su tekstu po kiekvienu auto su info koks greitis ir atstumas;
//! T 9. Pakeiskite kvadratelius div su img
//! T 10. Pakeiskite finish line su img
//! Perdaryti su ECMA5;

//! T 1. fn getUserInput() - paima is user numberOfCars ir distance;

let numberOfCars = 0;
let distance = 0;
const cars = [];

// const getUserInput = () => {
//   const isPositiveInteger = (input) => input > 0 && Number.isInteger(input);

//   while (!isPositiveInteger(numberOfCars)) {
//     numberOfCars = +prompt("Enter number of cars to race", 5);
//   }

//   while (!isPositiveInteger(distance)) {
//     distance = +prompt("Enter distance for the race", 100);
//   }
// };

function GetUserInput() {
  const isPositiveInteger = (input) => input > 0 && Number.isInteger(input);
}

GetUserInput.prototype.while = function (numberOfCars) {
  numberOfCars = +prompt("Enter number of cars to race", 5);
};
GetUserInput.prototype.while = function (distance) {
  distance = +prompt("Enter distance for the race", 100);
};

const 

// function Book(title, author, year) {
//     this.title = title; //objekto viduj nurodo i pati objekta "this refers to object which is a property of"
//     this.author = author;
//     this.year = year;
//   }

//   Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   };

//   Book.prototype.revise = function (newAdditionYear) {
//     this.year = newAdditionYear;
//     return this.getSummary();
//   };

//   const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
//   const book2 = new Book("1984", "George Orwell", 2000);
//   console.log(book1);
//   console.log(book1.revise(2022));
//   console.log(book1);

//! T 2. Car class: props - id, speed, distance; methods - accelerate(howMuch), slowdown(howMuch), move();
class Car {
  constructor(id) {
    this.id = id; //tsg kuriam nauja klase, del to nerasom extend
    this.speed = 0;
    this.distance = 0;
  }
  accelerate(change) {
    this.speed += change;
  }
  slowdown(change) {
    this.speed -= change;
    if (this.speed < 0) this.speed = 0; //jeigu if yra vienas statement, tuomet skliaustai nebutini
  }
  move() {
    this.distance += this.speed; //jeigu buvo 500m nuvaziuoti, kai kviesim metoda po sekundes jau bus ten tarkim 530
  }
}

//! M 3. fn drawCars() nupiešia tiek auto, kiek įvesta userio. (ir sukurti Cars objektus)
const drawCars = () => {
  for (let i = 0; i < numberOfCars; i++) {
    cars.push(new Car(i));
  }
  cars.forEach((car) => {
    const newCar = document.createElement("img");
    newCar.setAttribute("src", "f1car.png");
    newCar.classList.add("car");
    newCar.style.top = 60 + 90 * car.id + "px";
    document.body.append(newCar); //bet jis nera pridetas dom'e, plaukioja ten kazkur, del to reikia sito append

    const carInfo = document.createElement("div");
    carInfo.classList.add("car-info");
    carInfo.style.top = 125 + 90 * car.id + "px";
    carInfo.textContent = `Car: ${car.id + 1} Speed: ${car.speed} Distance: ${
      car.distance
    }`;
    document.body.append(carInfo);
  });
};

//! M 4. fn drawFinishLine()
const drawFinishLine = () => {
  const finishLine = document.createElement("img");
  finishLine.setAttribute("src", "finish.jpg");
  finishLine.classList.add("finishLine"); //class turetu buti per bruksneli, o ne camelCase parasyta...
  finishLine.style.height = 90 * numberOfCars + "px";
  finishLine.style.left = distance + 100 + "px";
  finishLine.style.top = "60px";
  document.body.append(finishLine);
};

//! T 5. fn pace() - nustatom greitį (pradzioj yra 0 ir reikia kazkaip pakeist dabar)
const pace = () => {
  cars.forEach((car) => {
    const change = Math.floor(Math.random() * 6);
    Math.random() > 0.4 ? car.accelerate(change) : car.slowdown(change);
  });
};

//! M 6. fn move() - pajudinam automobilius; pridedadam winning scenario handling;
//! add winner text
const move = () => {
  cars.forEach((car) => {
    car.move();
    document.querySelectorAll(".car")[car.id].style.left = car.distance + "px";
    const carInfoField = document.querySelectorAll(".car-info")[car.id];
    carInfoField.style.left = car.distance + "px";
    carInfoField.textContent = `Car: ${car.id + 1} Speed: ${
      car.speed
    } Distance: ${car.distance}`;
  });
  cars.sort((a, b) => b.distance - a.distance); //sort metodo nereikia kazkaip det i const. Sort pakeicia og array

  if (cars[0].distance >= distance) {
    clearInterval(paceInterval);
    clearInterval(moveInterval);
    const winnerText = document.createElement("div");
    winnerText.classList.add("winner-text");
    winnerText.textContent = `Winner is car number: ${cars[0].id + 1}`;
    document.body.append(winnerText);
  }
};

//! T 7. Pastumkite visa lenktyniu zona zemiau laimetojo teksto; - pakeitimai prie newCar ir finishLine div kurimo

//! T 8. Pridekite div su tekstu po kiekvienu auto su info koks greitis ir atstumas;

//! T 9. Pakeiskite staciakampius div su img
//! T 10. Pakeiskite finish line su img

getUserInput();
drawCars();
drawFinishLine();
pace();

const paceInterval = setInterval(pace, 2000);
const moveInterval = setInterval(move, 500);
