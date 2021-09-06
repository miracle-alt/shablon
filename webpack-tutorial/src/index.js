import { sum } from "./helper/sum.js";
console.log(sum(2,3));
//--------------------------------------------------------------------------------------------------------------------------------------------------
import {printInfo} from './test.js';
import arr from "./test.js";

console.log(printInfo(10));
console.log(arr);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Webpack");
//-----------------------------------------------------------------------------------------------------------------------------------------------
// import simpleTemplate from "./templates/simple.hbs";
// import listTemplate from "./templates/list.hbs";
// import arrTemplate from "./templates/array.hbs";
// import libsTemplate from "./templates/libs.hbs";
// import { base, list, frameworks, libs } from "./data/hbsData.js";
import refs from "./js/refs.js";
import { submitHandler } from "./js/handlers.js";
import questionsTemplate from "./templates/questions.hbs";
import serverData from "./data/serverData.js";
import "./styles/style.css";
//------------------------------------------------------
import "./styles/main.scss";
//----------------------------------------------------
import { createLi } from "./js/templateStringHandler.js";

// const root = document.querySelector("#root");

// // 1) Simple example
// const markup = simpleTemplate(base);

// root.insertAdjacentHTML("beforeend", markup);

// const listMarkup = listTemplate(list);

// root.insertAdjacentHTML("beforeend", listMarkup);

// const arrMarkup = arrTemplate(frameworks);

// root.insertAdjacentHTML("beforeend", arrMarkup);

// const libsMarkup = libsTemplate(libs);

// root.insertAdjacentHTML("beforeend", libsMarkup);

// 1) Поучить доступ к данным формы - event submit
// 2) На основе данных из формы нарисовать элемнт списка - hbs

// const markup = questionsTemplate(serverData);

// refs.root.insertAdjacentHTML("beforeend", markup);

// localStorage.setItem("theme", "dark");
// const theme = localStorage.getItem("theme");
// console.log(theme);

// const settings = {
//   theme: "pink",
//   fontSize: 12,
//   fontFamily: "Roboto",
// };

// const dataForStorage = JSON.stringify(settings);

// localStorage.setItem("settings", dataForStorage);

// const data = localStorage.getItem("settings");

// console.log(`data`, JSON.parse(data));

// console.log(localStorage.getItem("settings"));

/////////////////// template string
const storageCollection = JSON.parse(localStorage.getItem("list"));
// "[1,2,3,4]" // [1,2,3,4] // null
const dataFromStorage = storageCollection ? storageCollection : [];
const result = dataFromStorage.map((string) => createLi(string));
const markup = result.join("");
refs.ul.insertAdjacentHTML("beforeend", markup);
refs.form.addEventListener("submit", submitHandler);

//--------------------------------------------------------------------------------------------------------
// Create a class property without a constructor
class Game {
    name = "Violin Charades";
}
const myGame = new Game();

const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

const heading = document.createElement("h1");
heading.textContent = "Interesting!";

const app = document.querySelector("#root");
app.append(heading, p);
//----------------------------------------------------------------------------------------------------------------------------------------------
import expamle from "./images/smoke.png";
const img = document.createElement('img');
img.src = expamle;
app.append(img);
//---------------------------------------------------------------------------------------------------------------------------------------------
import imgSvg from "./images/flat.svg";
const svgImg = document.createElement('img');
svgImg.src = imgSvg;
app.append(svgImg);








