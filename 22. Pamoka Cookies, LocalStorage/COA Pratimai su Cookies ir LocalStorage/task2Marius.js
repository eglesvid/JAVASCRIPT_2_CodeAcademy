//? Į localStorage, įrašykite savo vardą, pavardę,
//? aprašymą, ir nuorodą į profilio nuotrauką.
//? Informaciją įrašykite pirmą kartą užkrovus puslapį,
//? o vėliau ją atvaizduokite.

//jeigu tuscia, idedam:

const main = document.querySelector("main");

if (!localStorage.getItem("name")) {
  localStorage.setItem("name", "Marius");
  localStorage.setItem("last-name", "Matulevicius");
  localStorage.setItem("description", "I do stuff");
  localStorage.setItem(
    "url",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );
} else {
  const par = document.createElement("p");
  par.innerText = `name: ${localStorage.getItem("name")} \n
  last name: ${localStorage.getItem("last-name")} \n
  description: ${localStorage.getItem("description")}`;

  const img = document.createElement("img");
  img.src = localStorage.getItem("url");

  main.append(par, img);
}

//po antro karto parefreshinus, pasirodo visi dalykai puslapy
