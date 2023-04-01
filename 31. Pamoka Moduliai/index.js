//? Moduliai leidzia tureti daugiau negu 1 js faila

// import { sayHello, sayGoodbye } from "./second.js";

// sayHello();
// sayGoodbye();

//? Jeigu norim duot kita pavadinima: (og faile niekas nepasikeis, someOtherName galioja tik siame faile)
// import { sayHello as someOtherName, sayGoodbye } from "./second.js";

// someOtherName();
// sayGoodbye();

//? Jeigu norim default f-ija importuoti:
//? defaultine f-ija galime tureti tik viena
// import { sayHello as someOtherName, sayGoodbye } from "./second.js";
// import doDefaultStuff from "./second.js"; //nebereikia lauztiniu skliaustu, nereikia as, ir mums suimportuos ta defaultine f-ija

// someOtherName();
// sayGoodbye();

//?
// import doDefaultStuff, {
//   sayHello as someOtherName,
//   sayGoodbye,
// } from "./second.js"; //tarp skliausteliu paprasti exportai, pries juos - defaultinis exportas

// someOtherName();
// sayGoodbye();

//?
import fetchData, { sayHello as someOtherName, sayGoodbye } from "./second.js";

someOtherName();
sayGoodbye();
fetchData();
