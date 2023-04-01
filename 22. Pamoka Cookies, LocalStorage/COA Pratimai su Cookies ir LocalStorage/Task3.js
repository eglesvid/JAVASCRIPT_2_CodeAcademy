//? Sukurkite puslapį, kuriame būtų forma su vienu input - fullName.
//? Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname).
//? Vardą ir pavardę įdeda į objektą, o objektą - į array.
//? Šį array išsaugo localStorage.
//? Po forma sukurkite lentelę ir joje atvaizduokite informaciją iš localStorage

const LOCAL_STORAGE_ITEM_KEY = "users";

const renderUsersTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  users &&
    users.forEach((user) => {
      const name = document.createElement("td");
      name.innerText = user.name;

      const surname = document.createElement("td");
      surname.innerText = user.surname;

      const tr = document.createElement("tr");
      tr.append(name, surname);
      tbody.append(tr);
    });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = event.target.querySelector('input[name="name"]').value;
  const [name, surname] = fullName.split(" ");

  const usersInlocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)
  );
  if (usersInlocalStorage && usersInlocalStorage.length) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...usersInlocalStorage, { name, surname }])
    );
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([{ name, surname }])
    );
  }
  renderUsersTable();
});

renderUsersTable();
