//todo 1: sukurt f-ija, kuri kviestu jau ne su puslapiu, o naudojantis kazkokiu id.
//todo:   cia practice kaip konstruot url su kazkokiu parametru
//? Create new function, which would return details about one specific image,
//? e.g. id = 5;https://picsum.photos/id/{id}/info should be given to function as parameter;
//? Some data about image should be added to HTML with JS.

// MARIJAUS ATS.:
const getPicInfo = async (id) => {
  try {
    const response = await fetch(`https://picsum.photos/id/${id}/info`);
    const info = await response.json();
    const div = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = `Author: ${info.author}`;
    const img = document.createElement("img");
    img.setAttribute("src", info.download_url);
    img.style.width = "300px";
    img.style.height = "300px";
    div.append(heading, img);
    document.body.append(div);
  } catch (err) {
    console.error(err);
  }
};

getPicInfo(5);

// MANO ATS.:

// const getDetails = async (detail) => {
//   try {
//     id = 5;
//     const urlPicsum = `https://picsum.photos/id/`;
//     const body = document.querySelector("body");
//     const response = await fetch(urlPicsum + `${id}` + "/info");
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// getDetails(5);

//? Pvz. i panasia tema
//? https://www.valentinog.com/blog/url/
// const myUrlWithParams = new URL("https://www.example.dev/");

// myUrlWithParams.searchParams.append("city", "Rome");
// myUrlWithParams.searchParams.append("price", "200");

// console.log(myUrlWithParams.href);

// let id = 5;
// const myUrl = new URL("https://picsum.photos/id/");
// myUrl.searchParams.append(`${id}`);
// myUrl.searchParams.append("/info");
// console.log(myUrl.href);
