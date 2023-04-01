//! Promises with async/await (visa tai, ka gaunam is promises, dedam i variables)

//? rewrite previous example with async/await

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
/*
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log("Error got in fetching post: " + e))
  .finally(() => console.log("Fetching finished"));
  */

//1. susikuriame asinchronine funckija; tada tai, ka is kiekvieno promise gauna, isidedam i kintamuosius. Kuo daugiau, tuo labiau apsimoka async naudot

const asyncFunction = async () => {
  const response = await fetch(apiUrl); //ides ta, ka gaus sulaukus is fetch apiUrl. Await - lauks rezultatu
  const data = await response.json();
  console.log(data);
};

// asyncFunction();

//? Promise.all with async/await

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "start");
});

const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 1500, "second promise fulfilled");
});

const promise4 = new Promise((resolve) => {
  setTimeout(resolve, 300, "last promise fulfilled");
});

//.then
// Promise.all([promise2, promise3, promise4]).then((data) => console.log(data));

//async/await
async function waitForAll() {
  const data = await Promise.all([promise2, promise3, promise4]);
  console.log(data);
}

// waitForAll();

//? errors with async/await

const catchError = async () => {
  try {
    const resultPromiseTwo = await promise2;
    console.log(resultPromiseTwo);
  } catch (e) {
    console.log("Error caught: " + e);
  } finally {
    console.log("finished working with promise");
  }
};

catchError();
