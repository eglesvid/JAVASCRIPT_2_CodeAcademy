const loggedInJSON = localStorage.getItem("logged-in");

const loggedInObj = JSON.parse(loggedInJSON);
console.log(loggedInObj);
if (loggedInObj) {
  if (loggedInObj.expires > Date.now()) {
    setTimeout(() => {
      window.location.replace("https://www.google.com/");
    }, 5000);
  } else {
    console.log("expired");
  }
}

const nameInput = document.querySelector("#name-input");
const passwordInput = document.querySelector("#password-input");

document.querySelector("button").addEventListener("click", () => {
  const name = nameInput.value;
  const password = passwordInput.value;
  // sitoj vietoj siusciau uzklausa i serveri
  // serveris sako viskas ok, gali prisijungti
  // uzdedam, kad jau buvo prisijungta:
  const now = new Date();
  const expires = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
  localStorage.setItem(
    "logged-in",
    JSON.stringify({
      expires: expires.getTime(),
      value: true,
    })
  );
});
