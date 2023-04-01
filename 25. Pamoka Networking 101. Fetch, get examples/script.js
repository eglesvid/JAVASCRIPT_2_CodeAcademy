//! Fetch GET examples. Uzklausos, kur bus nurodyta gauti duomenis. Kita diena bus fetch post ir pan.
//! Pats uzklausos tipas tai jis yra to requesto objekto, kuris siunciamas, tipas
//! Jeigu naudosim ne fetch, o kazka kita, bus react'as, akciju biblioteka...
//! PADEDA MUMS SUKONSTRUOTI UZKLAUSA IR PADEDA SUVALGYT ATSAKYMA

//? 1. getgithub users

// const url = "https://api.github.com/users"; //adresas ne i svetaine, o i ta sandeli useriu, nes mes norim userius gaut
// const body = document.querySelector("body");

// // fetch(url)
// //   .then((response) => response.json()) //grazins json, nes pirmas response tai yra tiesiog response objektas
// //   .then((data) => console.log(data)); //cia teve musu eilutes. Viena karta i json ir kita karta i data.

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const list = document.createElement("ul");
//     data.forEach((user) => {
//       const userListItem = document.createElement("li");
//       userListItem.textContent = user.login;
//       list.append(userListItem);
//     });
//     body.append(list);
//   })
//   .catch((error) => {
//     const errorMessage = document.createElement("h1");
//     errorMessage.textContent = "Error catched: " + error;
//     body.append(errorMessage);
//   })
//   .finally(() => console.log("fetch finished"));

//? 2. get bunch picsum photos

// const urlPicsum = "https://picsum.photos/v2/list";
// const body = document.querySelector("body");

// const getBunchPhotos = async () => {
//   try {
//     const response = await fetch(urlPicsum);
//     const data = await response.json();
//     body.style.display = "flex";
//     body.style.flexWrap = "wrap";
//     data.forEach((imageData) => {
//       const image = document.createElement("img");
//       image.setAttribute("src", imageData.download_url);
//       image.setAttribute("width", "200px");
//       body.append(image);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// const button = document.querySelector("button");
// button.addEventListener("click", getBunchPhotos);

//? 3. get specific page with GET parameter

// const urlPicsum = "https://picsum.photos/v2/list";
// const body = document.querySelector("body");

// const getBunchPhotos = async (pageNumber) => {
//   try {
//     const response = await fetch(urlPicsum + "?page=" + pageNumber);
//     const data = await response.json();
//     console.log(data);
//     body.style.display = "flex";
//     body.style.flexWrap = "wrap";
//     data.forEach((imageData) => {
//       const image = document.createElement("img");
//       image.setAttribute("src", imageData.download_url);
//       image.setAttribute("width", "200px");
//       body.append(image);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// getBunchPhotos(10); //gaunu nurodyto psl paveikslelius ir juos islogina
