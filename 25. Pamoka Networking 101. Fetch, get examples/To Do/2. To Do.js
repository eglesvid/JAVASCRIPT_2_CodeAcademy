//todo 2:
//? Get Chuck Norris joke from https://api.chucknorris.io/jokes/random
//? and print the joke itself out in html.
//? Do it using async/await, and also with .then notation.

// MANO ATS.:

// const url = "https://api.chucknorris.io/jokes/random";
// const main = document.querySelector("main");

// const printJoke = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     const joke = document.createElement("p");
//     joke.textContent = data.value;
//     main.append(joke);
//   } catch (e) {
//     console.log(e);
//   }
// };

// printJoke(5);

// MARIJAUS ATS.:

const getJoke = async (id) => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    const heading = document.createElement("h2");
    heading.style.color = "blue";
    heading.textContent = joke.value;
    document.body.append(heading);
  } catch (err) {
    console.error(err);
  }
};

getJoke(5);
