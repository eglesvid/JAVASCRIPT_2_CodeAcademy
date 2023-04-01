//? TASKS
// async function countPlusOne() {
//   const res = await fetch(
//     "https://test-api-faker.herokuapp.com/cafe04/wedding"
//   );
//   const data = await res.json();

//   const count = data.filter((element) => element.plusOne);
//   console.log(count.length);
// }

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

//? TASK 5
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
  const inPartyP = document.createElement("p");
  const partyPTextContent = `${person.name.split(" ")[0]} ${
    person.vip ? "Is VIP" : "Is not VIP"
  }`;
  inPartyP.textContent = partyPTextContent;

  const plusOneAttendeesPar = document.createElement("p");
  plusOneAttendeesPar.textContent = await countByParameter("plusOne");

  const totalAttendeesPar = document.createElement("p");
  totalAttendeesPar.textContent = await countTotal();

  container.append(inPartyP, plusOneAttendeesPar, totalAttendeesPar);
}

countByParameter("plusOne");
countByParameter("attending");
countTotal();
