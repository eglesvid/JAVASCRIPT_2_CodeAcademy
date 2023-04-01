const ENDPOINT = "https://golden-whispering-show.glitch.me";
const main = document.querySelector("main");

const products = await getProducts();

products.forEach((product) => {
  generateProduct(product);
});

async function getProducts() {
  const res = await fetch(ENDPOINT);
  const data = await res.json();

  return data;
}

// {
//   "id": 1,
//   "image": "https://pagrindinis.barbora.lt/api/images/GetInventoryImage?id=d0fb9982-06e1-469d-ae79-e7efd69c59a1",
//   "title": "Gerimanto Sūris",
//   "price": 2.99
// }

function generateProduct(product) {
  const container = document.createElement("div");

  const img = document.createElement("img");
  img.src = product.image;
  const title = document.createElement("p");
  title.textContent = product.title;
  const price = document.createElement("p");
  price.textContent = `$${product.price}`;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Istrinti";
  deleteButton.id = product.id;
  deleteButton.addEventListener("click", deleteButtonHandler);

  container.append(img, title, price, deleteButton);
  main.append(container);
}

async function deleteButtonHandler(e) {
  const { id } = e.target; //patogiau, jeigu dar kazka imtumem, nereiktu kartoti to paties kodo daug kartu. Cia tas pats, kas rasytume const id = e.target.id; dabar rasom tiesiog const { id, somethingElse } = e.target.

  const res = await fetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const allProducts = document.querySelectorAll("div");
    console.log(allProducts);

    for (let index = 0; index < allProducts.length; index++) {
      if (allProducts[index].children[3].id === id) {
        main.removeChild(allProducts[index]);
      }
    }
  }

  const data = await res.json();
}
