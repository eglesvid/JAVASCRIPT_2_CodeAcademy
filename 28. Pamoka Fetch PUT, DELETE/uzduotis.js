//? 1. Pasidarykit GET request ir pasižiūrėkit,
//? kokie studentai jau įrašyti:
//? GET: https://testapi.io/api/Marijus/resource/students

const DATA_BASE_URL = "https://testapi.io/api/Marijus/resource/students";

// const getData = async () => {
//   const response = await fetch(DATA_BASE_URL);
//   const data = await response.json();
//   console.log(data);
// };

// getData();

//? 2. Išsiųskit POST užklausą su savo duomenimis –
//? tik name, town, hometown:
//? POST: https://testapi.io/api/Marijus/resource/students

// const postMyData = async () => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Egle",
//       town: "Vilnius",
//       hometown: "Vilnius",
//     }),
//   };

//   const res = await fetch(DATA_BASE_URL, options);

//   const jsonData = await res.json();
//   console.log(jsonData);
// };

// postMyData();

//? 3. Atnaujinkit savo duomenis su PUT užklausa –
//? tik name, town, hometown, profession ir age:
//? PUT: https://testapi.io/api/Marijus/resource/students/{id}

// const updateMyData = async (id) => {
//   const response = await fetch(DATA_BASE_URL + "/" + id, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Egle_updated",
//       town: "Vilnius_updated ",
//       hometown: "Vilnius_updated",
//       profession: "student",
//       age: 23,
//     }),
//   });
//   const info = await response.json();
//   console.log(info);
// };

// updateMyData(8);

//? 4. Pridėkit dummy student su POST ir po to ištrinkite
//? tą dummy user su DELETE:
//? POST: https://testapi.io/api/Marijus/resource/students/{id}

// const postMyDummy = async () => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Egle_Dummy",
//       town: "Vilnius_Dummy",
//       hometown: "Vilnius_Dummy",
//     }),
//   };

//   const res = await fetch(DATA_BASE_URL, options);
//   console.log(res);

//   const jsonData = await res.json();
//   console.log(jsonData);
// };

// postMyDummy();

// const deleteDummy = async (dummyId) => {
//   try {
//     const response = await fetch(DATA_BASE_URL + "/" + dummyId, {
//       method: "DELETE",
//     });
//     if (response.ok) console.warn(`User id: ${dummyId} deleted successfully`);
//   } catch (err) {
//     console.error(err);
//   }
// };

// deleteDummy(41);
