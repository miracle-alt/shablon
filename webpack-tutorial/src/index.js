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
import simpleTemplate from "./templates/simple.hbs";            // мои данные
import listTemplate from "./templates/list.hbs";                 // список библиотек 
import arrTemplate from "./templates/array.hbs";             // если квадратные скобки ставится - this
import libsTemplate from "./templates/libs.hbs";               //
import { base, list, frameworks, libs } from "./data/hbsData.js";    // 
//---------------------------------------------------------------------------------------------------------------------
import refs from "./js/refs.js";
import { submitHandler } from "./js/handlers.js";

import questionsTemplate from "./templates/questions.hbs";
import serverData from "./data/serverData.js";

import "./styles/style.css";
//------------------------------------------------------
import "./styles/main.scss";
//----------------------------------------------------
import { createLi } from "./js/templateStringHandler.js";

const root = document.querySelector("#root");

// 1) Simple example
const markup1 = simpleTemplate(base);
console.log(markup1);
root.insertAdjacentHTML("beforeend", markup1);

const listMarkup = listTemplate(list);
root.insertAdjacentHTML("beforeend", listMarkup);

const arrMarkup = arrTemplate(frameworks);
root.insertAdjacentHTML("beforeend", arrMarkup);

const libsMarkup = libsTemplate(libs);
root.insertAdjacentHTML("beforeend", libsMarkup);
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// 1) Поучить доступ к данным формы - event submit
// 2) На основе данных из формы нарисовать элемнт списка - hbs
console.log(refs);

const markup2 = questionsTemplate(serverData);
refs.root.insertAdjacentHTML("beforeend", markup2);
console.log(markup2);
//-----------------------------------------------------------
// localStorage.setItem("theme", "dark");                // строка
// const theme = localStorage.getItem("theme");          // настройка фона браузера
// console.log(theme);
//-----------------------------------------------------------
const settings = {                                    // обьект 
  theme: "pink",                                      // настройки сайта
  fontSize: 12,
  fontFamily: "Roboto",
};
// const dataForStorage = JSON.stringify(settings);
// localStorage.setItem("settings", dataForStorage);
//-----------------------------------------------------------
// const data = localStorage.getItem("settings");           // 
// console.log(`data`, JSON.parse(data));
//-----------------------------------------------------------






console.log(localStorage.getItem("settings"));







//   template string (для того чтоб данные не удалялись при перезагрузки сайта)
const storageCollection = JSON.parse(localStorage.getItem("list"));          // проверить работу Storage
// "[1,2,3,4]" // [1,2,3,4] // null
const dataFromStorage = storageCollection ? storageCollection : [];          // 

const result = dataFromStorage.map((string) => createLi(string));            // создаем первые данные(разметку)
const markup = result.join("");                                              // из этих данных(разметки) делаем одну строку
refs.ul.insertAdjacentHTML("beforeend", markup);                             // делаем вставку ul
refs.form.addEventListener("submit", submitHandler);                         // вствка формы при сабмите li

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








