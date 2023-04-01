//? Antriniu f-iju failas
//? Pirma reikia eksportuoti, tada kitam faile importuoti
//? Eksportuojam tai, ka norim, kad kiti naudotu

// export function sayHello() {
//   console.log("Hello world!");
// }

// export function sayGoodbye() {
//   console.log("Bye bye!");
// }

// export default function doDefaultStuff() {
//   console.log("Default function");
// }

// function helpStuff() {}

export function sayHello() {
  console.log("Hello world!");
}

export function sayGoodbye() {
  console.log("Bye bye!");
}

export default function fetchData() {
  console.log("Fetching data");
  console.log(generateHtml());
} //duomenu inkapsuliacija

function generateHtml() {
  return "something";
}
