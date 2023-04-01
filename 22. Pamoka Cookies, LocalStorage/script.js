//? LOCAL STORAGE (bus iki kol neistrinsim); SESSION STORAGE (persikrovus dingsta )
// document.querySelector("button").addEventListener("click", () => {
//   localStorage.setItem("Test", "Labas");
// });

// console.log(localStorage.getItem("Test"));

//? COOKIES (turi expiration)
document.querySelector("button").addEventListener("click", () => {});
const now = new Date();
const later = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7); //getTime duos ms
document.cookie = `lastName=asdf; expires= ${now.toUTCString()}`;
console.log(document.cookie);
localStorage.setItem(
  "logged-in",
  JSON.stringify({
    value: true,
    expirationDate: later,
  })
);
console.log(JSON.parse(localStorage.getItem("logged-in")));
