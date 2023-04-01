const ENDPOINT = "https://golden-whispering-show.glitch.me";

const imageInput = document.querySelector('input[name="image"]');
const priceInput = document.querySelector('input[name="price"]');
const titleInput = document.querySelector('input[name="title"]');

// {
//   "id": 1,
//   "image": "https://pagrindinis.barbora.lt/api/images/GetInventoryImage?id=d0fb9982-06e1-469d-ae79-e7efd69c59a1",
//   "title": "Gerimanto Sūris",
//   "price": 2.99
// }

document.querySelector("button").addEventListener("click", async () => {
  const image = imageInput.value;
  const price = priceInput.value;
  const title = titleInput.value;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      title,
      price,
    }),
  });
  const data = await res.json();

  document.location.replace("/COA_uzduotis/index.html");
});
