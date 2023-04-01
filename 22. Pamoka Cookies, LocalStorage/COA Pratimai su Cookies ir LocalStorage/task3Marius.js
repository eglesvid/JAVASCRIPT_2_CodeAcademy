//? Sukurkite puslapį, kuriame būtų forma su vienu input - fullName.
//? Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname).
//? Vardą ir pavardę įdeda į objektą, o objektą - į array.
//? Šį array išsaugo localStorage.
//? Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

document.querySelector("input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const fullName = e.target.value;
    const [name, lastName] = fullName.split(" ");

    const person = {
      name,
      lastName,
    };
    if (!localStorage.getItem("people")) {
      const personArray = [person];
      localStorage.setItem("people", JSON.stringify(personArray)); //jeigu nieko nera irasyta
    } else {
      const entry = JSON.parse(localStorage.getItem("people"));
      entry.push(person); //pridejom nauja irasa i savo array
      localStorage.setItem("people", JSON.stringify(entry));
    } //jeigu yra kazkas irasyta
    generateTableEntry(person);

    e.target.value = "";
  }
});

function generateTableEntry(person) {
  const table = document.querySelector("table");

  const row = document.createElement("tr");
  const nameTd = document.createElement("td");
  const lastNameTd = document.createElement("td");
  nameTd.textContent = person.name;
  lastNameTd.textContent = person.lastName;

  row.append(nameTd, lastNameTd);
  table.append(row);
}
