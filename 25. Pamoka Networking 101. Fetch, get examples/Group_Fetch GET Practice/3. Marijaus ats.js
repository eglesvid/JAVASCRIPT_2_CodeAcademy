const partyUrl = "https://test-api-faker.herokuapp.com/cafe04/party";

const getVIP = async (name) => {
  const response = await fetch(partyUrl);
  const data = await response.json();
  const searchResult = data.find((item) => item.name === name);
  console.log(
    searchResult
      ? searchResult.vip
        ? `${name} is VIP`
        : `${name} is not a VIP`
      : `${name} is not in the list`
  );
};

getVIP("Marijus");
getVIP("Matas");

//?2

const getWeddingList = async () => {
  const response = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/wedding"
  );
  const data = await response.json();
  console.log(data.filter((item) => item.plusOne).length);
};

getWeddingList();

//?3

const getAttending = async () => {
  const response = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/wedding"
  );
  const data = await response.json();
  console.log(data.filter((item) => item.attending).length);
};

getAttending();

//?4

const getTotal = async () => {
  const response = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/wedding"
  );
  const data = await response.json();
  const amountOfGuests = data.reduce((total, item) => {
    if (item.attending && item.plusOne) {
      return total + 2;
    } else if (item.attending && !item.plusOne) {
      return ++total;
    } else return total;
  }, 0);
  console.log(amountOfGuests);
};

getTotal();

const urls = [
  "https://test-api-faker.herokuapp.com/cafe04/wedding",
  "https://test-api-faker.herokuapp.com/cafe04/party",
];

//? 6 Promise.all
let partyData;
let weddingData;

const getAll = async () => {
  const response = await Promise.all(urls.map((url) => fetch(url)));
  [weddingData, partyData] = await Promise.all(
    response.map((res) => res.json())
  );
  console.log(
    "https://test-api-faker.herokuapp.com/cafe04/wedding",
    weddingData,
    "https://test-api-faker.herokuapp.com/cafe04/party",
    partyData
  );
};

getAll();

//? HTML stuff
const handleSubmit = (e) => {
  e.preventDefault();
  const name = partyForm.name.value;

  const searchResult = partyData.find((item) => item.name === name);
  renderHTML(
    searchResult
      ? searchResult.vip
        ? `${name} is VIP`
        : `${name} is not a VIP`
      : `${name} is not in the list`
  );
  renderHTML(
    `Plus one selected: ${weddingData.filter((item) => item.plusOne).length}`
  );
  const amountOfGuests = weddingData.reduce((total, item) => {
    if (item.attending && item.plusOne) {
      return total + 2;
    } else if (item.attending && !item.plusOne) {
      return ++total;
    } else return total;
  }, 0);
  renderHTML(`Amount of guests: ${amountOfGuests}`);
};

partyForm.addEventListener("submit", handleSubmit);

const renderHTML = (text) => {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  document.body.append(h2);
};
