const BASE_URL = "https://kaker-js-crud.onrender.com/cafe-04/party";

//! GET
//! a) pridėkite GET ir patikrinkit ar gaunami duomenis;

const getPartyMembers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const partyMembers = await response.json();

    return partyMembers;
  } catch (err) {
    console.error(err);
  }
};

//! POST
//! b) pridėkite POST ir pridėkite įrašą apie save;
//after POST run line below:
// window.location.reload();

// const guest = {
//   fullName: "ok_Egle Sviderskyte",
//   attending: true,
//   plusOne: false,
//   children: 0,
// };

const postGuest = async (guest) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

//! PUT
//! c) pridėkite UPDATE ir atnaujinkite SAVO įrašo informaciją.
// window.location.reload();

const updateGuest = async (myId, guest) => {
  try {
    const response = await fetch(BASE_URL + "/" + myId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

//! DELETE
//! d) pridėkite DELETE ir ištrinkite SAVO įrašą;
// window.location.reload();

const deleteGuest = async (id) => {
  try {
    const response = await fetch(BASE_URL + "/" + id, {
      method: "DELETE",
    });
    if (response.ok) console.warn(`User id: ${id} deleted successfully`);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};
