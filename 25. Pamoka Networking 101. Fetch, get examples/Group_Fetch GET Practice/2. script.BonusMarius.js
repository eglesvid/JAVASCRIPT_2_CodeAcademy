async function countByParameter(param) {
  const res = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/wedding"
  );
  const data = await res.json();

  const count = data.filter((element) => element[param]);
  console.log(count.length);

  return count.length;
}

async function countTotal() {
  const res = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/wedding"
  );
  const data = await res.json();

  let sum = 0;

  data.forEach((element) => {
    if (element.attending) {
      if (element.plusOne) {
        sum += 2;
      } else {
        sum++;
      }
    }
  });
  console.log(sum);

  return sum;
}

const nameInput = document.querySelector("input");
const container = document.querySelector("div");
document.querySelector("button").addEventListener("click", checkHandler);

async function checkHandler() {
  const name = nameInput.value;
  const resParty = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/party"
  );
  const partyData = await resParty.json();

  const person = partyData.find((person) => person.name.split(" ")[0] === name);
  if (person) {
    const inPartyP = document.createElement("p");
    const partyPTextContent = `${person.name.split(" ")[0]} ${
      person.vip ? "Is VIP" : "Is not VIP"
    }`;
    inPartyP.textContent = partyPTextContent;
    container.append(inPartyP);
  }

  const [plusOneCount, countTotalNumber] = await Promise.all([
    countByParameter("plusOne"),
    countTotal(),
  ]);

  const plusOneAttendeesPar = document.createElement("p");
  plusOneAttendeesPar.textContent = plusOneCount;

  const totalAttendeesPar = document.createElement("p");
  totalAttendeesPar.textContent = countTotalNumber;

  const memeRes = await fetch(
    "https://test-api-faker.herokuapp.com/cafe04/meme"
  );
  const memeData = await memeRes.json();
  const memeImg = document.createElement("img");
  memeImg.src = memeData.imgUrl;

  container.append(plusOneAttendeesPar, totalAttendeesPar, memeImg);
}

countByParameter("plusOne");
countByParameter("attending");
countTotal();
