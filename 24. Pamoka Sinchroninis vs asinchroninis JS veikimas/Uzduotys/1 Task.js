//? TASK 1
//? 1. Sync/async.
//? Susikurkite funkciją callingAPI(), kuri nenaudos parametrų.
//? Funkcija savo viduje turi turėti setTimeout,
//? kuris po 3s išlogintų į consolę, call failed‘.
//? Taip pat sukurkite funkciją callingGoodAPI, kuri irgi neturės
//? parametrų ir nustatys intervalą, kad kas 2s į consolę būtų
//? parašoma‚ call was successful‘.
//? Apsirašę funkcijas, po jomis panaudokite žemiau pateiktą kodo fragmentą.
//? console.log("Start");
//? callingAPI();
//? callingGoodAPI();
//? console.log("Finish");
//?
//? Paanalizuokite ir pabandykite sau paaiškinti kaip veikia
//? call stack, web API, callbackque ir event loop.

function callingAPI() {
  setTimeout(() => console.log("call failed"), 3000);
}

callingAPI();

function callingGoodAPI() {
  setInterval(() => console.log("call was successful"), 2000);
}

callingGoodAPI();

//

console.log("Start");
callingAPI();
callingGoodAPI();
console.log("Finish");
