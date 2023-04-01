//? TASK 1:
//? Check if party guests list includes your name (only name)
//? and your status is VIP.
//? Then check if that list includes other random person,
//? e.g.your mom/father/brother/sister and status is VIP:
//? https://test-api-faker.herokuapp.com/cafe04/party

// const partyUrl = "https://test-api-faker.herokuapp.com/cafe04/party";

// const getVIP = async (name) => {
//   const response = await fetch(partyUrl);
//   const data = await response.json();
//   const searchResult = data.find((item) => item.name === name);
//   console.log(
//     searchResult
//       ? searchResult.vip
//         ? `${name} is VIP`
//         : `${name} is not a VIP`
//       : `${name} is not in the list`
//   );
// };

// getVIP("Marijus");
// getVIP("Matas");

// AINO TASK 1:

// const partyUrl = "https://test-api-faker.herokuapp.com/cafe04/party";

// fetch(partyUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const myName = "Ainas";
//     let found = false;
//     data.forEach((entry) => {
//       if (entry.name === myName && entry.vip === true) {
//         found = true;
//         console.log(entry.name);
//       }
//     });
//   });

//? TASK 2:
//? Check wedding guests list and count how many
//? have selected plus one option:
//? https://test-api-faker.herokuapp.com/cafe04/wedding

// const weddingUrl = "https://test-api-faker.herokuapp.com/cafe04/wedding";

// const getNumber = async (number) => {
//   const response = await fetch(weddingUrl);
//   const data = await response.json();
//   const searchResult = data.filter((item) => item.plusOne === true).length;
//   console.log(searchResult);
// };

// getNumber();

//? TASK 3:
//? Check list of guests and how many have marked as ‘attending’.
//? https://test-api-faker.herokuapp.com/cafe04/wedding

// const weddingUrl = "https://test-api-faker.herokuapp.com/cafe04/wedding";

// const getNumber = async (number) => {
//   const response = await fetch(weddingUrl);
//   const data = await response.json();
//   const searchResult = data.filter((item) => item.attending === true).length;
//   console.log(searchResult);
// };

// getNumber();

//? TASK 4:
//? Check list of guests and calculate total amount of guests at the wedding:
//? If ‘attending’ marked, count as 1,
//? if ‘attending’ and ‘plusOne’ marked, counts as 2,
//? but if ‘plusOne’ is marked and ‘attending’ is false, count as 0.
//?
//? AINO ATS. I 2, 3, 4 TASKS:

// const weddingUrl = "https://test-api-faker.herokuapp.com/cafe04/wedding";

// fetch(weddingUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     let countPlusOne = 0;
//     let countAttending = 0;
//     let countGuests = 0;
//     data.forEach((guest) => {
//       if (guest.plusOne === true) {
//         countPlusOne++;
//       }
//       if (guest.attending === true) {
//         countAttending++;
//       }
//       switch (true) {
//         case guest.attending && guest.plusOne:
//           countGuests += 2;
//           break;
//         case guest.attending:
//           countGuests++;
//           break;
//         case !guest.attending && guest.plusOne:
//           countGuests += 0;
//           break;
//         default:
//           countGuests += 0;
//           break;
//       }
//     });
//     console.log(countPlusOne);
//     console.log(countAttending);
//     console.log(countGuests);
//   });

//? TASK 5:
//? Add HTML to have input, where you can enter your or other name,
//? and button, with title ‘Check’.
//? After clicking button, output info to the page:
//? a) <name> is/is not in the /party list;
//? b) <name> is/is not a VIP guest;
//? c) Amount of attendees who selected plus one option: <amount>;
//? d) Amount of total attendees: <amount>;

const partyUrl = "https://test-api-faker.herokuapp.com/cafe04/party";
const weddingUrl = "https://test-api-faker.herokuapp.com/cafe04/wedding";
const input = document.getElementById("name-input");
const button = document.querySelector("button");

async function checkName() {
  try {
    const name = input.value;
    console.log(name);
    const fetchparty = await fetch(partyUrl);
    const fetchwedding = await fetch(weddingUrl);
    const partyResponse = await fetchparty.json();
    const weddingResponse = await fetchwedding.json();

    let fullResponse = "";

    const inParty = partyResponse.find((guest) => guest.name === name);
    if (inParty.name === name) {
      fullResponse += `${inParty.name} is in the party list\n`;
      if (inParty.vip === true) {
        fullResponse += `${inParty.name} is a VIP guest\n`;
      } else {
        fullResponse += `${inParty.name} is not a VIP guest\n`;
      }
    } else {
      fullResponse += `${inParty.name} is not in the party list\n`;
    }

    let countPlusOne = 0;
    let countAttending = 0;

    weddingResponse.forEach((guest) => {
      if (guest.plusOne === true && guest.attending === true) {
        countPlusOne++;
      }
      if (guest.attending === true) {
        countAttending++;
      }
    });

    fullResponse += `Amount of attendees who selected plus one option: ${countPlusOne}\nAmount of total attendees: ${countAttending}`;

    console.log(fullResponse);
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", checkName);
