//! 1. Sukurkite puslapį, index.html, kurį užkrovus
//? atsiranda lentelė su visais automobiliais iš
//? base URL.
//! 2. Sukurkite papildomą puslapį, add.html, kuriame būtų forma
//? su dviem inputais - brand ir model;
//? šie paduotų su post'u informaciją į base url
//? (formatas: objektas su dviem properties: brand ir model).
//! 3. Sukurkite notification - t.y. sėkmingai užpildžius formą
//? ir gavus patvirtinimą, turi virš formos rašyti,
//? kad duomenys sėkmingai išsaugoti;
//? o jei blogai - išmesti errorą.

import { makeGetRequest } from "./utils/requests.js"; // ./ reiskia lygiai tame paciame lygyje. // ../ pakylu vienu folderiu i virsu su dviem taskais. ../../
import { generateTableRow } from "./utils/generatingHtml.js";
const BASE_URL = "https://olive-bead-glazer.glitch.me";

const cars = await makeGetRequest(BASE_URL); // pasiimam visas masinas //async grazina promise, del to visad reikia await parasyt

cars.forEach((car) => generateTableRow(car));

generateTableRow();
