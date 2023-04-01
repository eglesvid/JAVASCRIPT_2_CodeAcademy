//? ir dar viena sudėtingesnė užduotis pasipraktikuoti session storage:

//? Create a shopping cart application using JavaScript and session storage.
//? The application should have the following features:
//? 1. A list of products that can be added to the cart.
//?    Each product should have a name, description, price, and image.
//? 2. A display area for showing the items in the cart,
//?    including the name, description, price, and image of each item.
//? 3. A button for removing an item from the cart.
//? 4. Use session storage to save the cart items so that they
//?    persist only during the current browser session.
//?
//? Instructions:
//? 1. Create an HTML file with a list of products that can be added to the cart.
//?    Each product should have a button that allows the user to add it to the cart.
//? 2. Create a JavaScript file to handle the logic for the shopping cart application.
//? 3. Use the sessionStorage object to save the cart items to the user's browser.
//? 4. When the page loads, check if there is a saved cart in session storage and display it if there is.
//? 5. When the user adds a product to the cart, update the cart and session storage.
//? 6. Add a button for each item in the cart that allows the user to remove it from the cart and update the session storage.

const products = [
  {
    id: 1,
    name: "Ant kraiko laikomų vištų kiaušiniai FAVORIT, 10 vnt., 10 vnt.",
    description: "Laisvai laikomų vištų kiaušiniai. Kiaušinių spalva - ruda.",
    price: 1.79,
    src: "https://cdn.barbora.lt/products/1e2eb2e0-ef7c-420c-97cc-a08097ea67eb_m.png",
  },
  {
    id: 2,
    name: "Paruošta vartoti košė SEMPER su vaisiais (nuo 6 mėn.), 120 g",
    description:
      "Paruošta vartoti ryžių ir avižų košė su kriaušėmis, mango, vynuogių ir obuolių sultimis, nuo 6 mėnesių amžiaus. Be pridėto cukraus.",
    price: 1.32,
    src: "https://cdn.barbora.lt/products/e3d6a7e8-ab82-4919-8829-41934c9fdeb5_m.png",
  },
  {
    id: 3,
    name: "Imbierų šaknys, 1 kg.",
    description:
      "Ryškaus aštraus skonio imbierų šaknys yra populiarus Azijos virtuvės prieskonis gaminant žuvų, paukštienos ar mėsos patiekalus.",
    price: 2.49,
    src: "https://cdn.barbora.lt/products/7b13c6d7-627b-4320-92fe-0eedd5bf02ce_m.png",
  },
  {
    id: 4,
    name: "Šilauogės 500 g, 500 g",
    description:
      "Sultingos šilauogių uogos puikiai tiks pagardinti lengviems pyragams, ledams, pieno ir vaisių kokteiliams ar skanauti vienas .",
    price: 4.49,
    src: "https://cdn.barbora.lt/products/70d2207b-83f6-466a-a146-64a0d29a7869_m.png",
  },
];

const addButtons = document.querySelectorAll("button");
const main = document.querySelector("main");
const cartSection = document.querySelector("section");

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", addButtonHandler);
}

function addButtonHandler(e) {
  const id = e.target.id;

  const currentCart = sessionStorage.getItem("cart");
  if (currentCart) {
    const currentCartObj = JSON.parse(currentCart);
    currentCartObj.push(id);
    sessionStorage.setItem("cart", JSON.stringify(currentCartObj));
  } else {
    sessionStorage.setItem("cart", JSON.stringify([id]));
  }
  generateCartElements(id);
}

function generateCartElements(id) {
  const cart = JSON.parse(sessionStorage.getItem("cart"));

  const product = products.find((p) => p.id === +id);
  const containerElement = document.createElement("div");
  containerElement.productId = id;

  const nameElement = document.createElement("h3");
  nameElement.textContent = product.name;
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;
  const priceElement = document.createElement("h4");
  priceElement.textContent = `€${product.price}}`;
  const imgElement = document.createElement("img");
  imgElement.src = product.src;
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Product";
  removeButton.productId = id; //vieta, kur galim idet random info, kuri neatsivaizduos html
  removeButton.addEventListener("click", removeButtonHandler);

  containerElement.append(
    nameElement,
    descriptionElement,
    priceElement,
    imgElement,
    removeButton
  );
  cartSection.append(containerElement);
}

function removeButtonHandler(e) {
  const id = e.target.productId;
  const cartElements = document.querySelectorAll("section > div");
  for (let i = 0; i < cartElements.length; i++)
    if (cartElements[i].productId === id) {
      cartSection.removeChild(cartElements[i]);

      const currentCart = JSON.parse(sessionStorage.getItem("cart"));
      const index = currentCart.findIndex((idx) => idx === id);
      delete currentCart[index];
      const filtered = currentCart.filter((item) => item); // pasiziuri, jeigu cia nera null ar undefined, mums tinka
      sessionStorage.setItem("cart", JSON.stringify(filtered));
    }
}
