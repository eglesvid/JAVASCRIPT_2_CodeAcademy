//! Sync/async

// programos dalys
// 1. duomenys - memory  heap;
// 2. veiksmai (funkcijos) - call stack;

//? Memory heap
// debugger;
const age = 700;
const city = "Vilnius";

//? Call stack ("kvietimu eile")

function logIt(number) {
  logItMore(number);
}

function logItMore(number) {
  //   console.log(number);
}

logIt(1);
logIt(2);
logIt(3);

//? Stack overflow (uzklausu eiles perpildymas)
function stackOverflow() {
  stackOverflow();
}

// stackOverflow(); //uzsikomentuojam, nes crashins

//? Asynchronous example with Web api
console.log(1);
setTimeout(() => console.log(2), 2000); //jau narsykle su ja tvarkosi. Nesvarbu, kiek laiko uzdetume - kol stack'as issitustina tik tada mes gaunam is web api (viskas bus ivykdyta tada, kai JS pabaigs vykdyt)
console.log(3);

//
