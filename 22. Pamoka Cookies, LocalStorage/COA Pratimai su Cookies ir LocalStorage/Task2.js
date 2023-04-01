//? Į localStorage, įrašykite savo vardą, pavardę, aprašymą,
//? ir nuorodą į profilio nuotrauką.
//? Informaciją įrašykite pirmą kartą užkrovus puslapį,
//? o vėliau ją atvaizduokite.

const profileInfo = {
  firstName: "John",
  lastName: "Snow",
  picture: "https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg",
  description:
    "John Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.",
};
localStorage.setItem("profile", JSON.stringify(profileInfo));

const renderProfileCard = (profile) => {
  const img = document.createElement("img");
  img.width = "200";
  img.src = profile.picture;
  img.alt = `${profileInfo.firstName} ${profileInfo.lastName} profile picture`;

  const name = document.createElement("h4");
  name.innerText = `${profileInfo.firstName} ${profileInfo.lastName}`;

  const description = document.createElement("h5");
  description.innerText = profileInfo.description;

  const card = document.createElement("div");
  card.append(img, name, description);
  document.body.append(card);
};

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
renderProfileCard(profileInfoFromLocalStorage);

//COA ATS:
// const profileInfo = {
//     firstName: 'John',
//     lastName: 'Snow',
//     picture: 'https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg',
//     description: 'Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.'
//   }
//   localStorage.setItem('profile', JSON.stringify(profileInfo));

//   const renderProfileCard = (profile) => {
//     const img = document.createElement('img');
//     img.width = '200';
//     img.src = profile.picture;
//     img.alt = `${profile.firstName} ${profileInfo.lastName} profile picture`;

//     const name = document.createElement('h4');
//     name.innerText = `${profile.firstName} ${profile.firstName}`;

//     const description = document.createElement('h5');
//     description.innerText = profile.description;

//     const card = document.createElement('div');
//     card.append(img, name, description);
//     document.body.append(card);
//   };

//   const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem('profile'));
//   renderProfileCard(profileInfoFromLocalStorage);
