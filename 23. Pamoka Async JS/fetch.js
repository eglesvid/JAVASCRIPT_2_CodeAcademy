//? fetch - padaryti uzklausa i kazkur. Mes su fetch galim pasiimt info is to serverio, arba nusiust. fetch sukuria pas save kazkoki tai promise
//? su then'ais pasakom kazka, kai surinko ta ir ta info, vykdyk koda
//? padarom uzklausa. promise yra uz mus sugeneruotas

const mainElement = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.url;
      mainElement.append(img);
    });
  })
  .catch((err) => {
    console.log("some error happened", err);
  });
