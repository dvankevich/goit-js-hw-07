"use strict";

// З використанням властивостей і методів DOM - елементів, напиши скрипт, який:

//     * Порахує й виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.
//     * Для кожного елемента li.item у списку ul#categories знайде й
//     виведе в консоль текст заголовка елемента(тегу < h2 >) і кількість
//      елементів у категорії(усіх < li >, вкладених у нього).

// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/jsref/met_document_queryselectorall.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp

// task 1
const categories = document.querySelectorAll(".item");
console.log(`Number of categories ${categories.length}`);

// task 2
// console.log(categories);

const categoriesContent = categories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("ul>li").length}`);
});

// const categoriesHeader = document.querySelectorAll(".item>h2");
// console.log(categoriesHeader[0].innerText);

// const items = document.querySelectorAll(".item>ul>li");
// console.log(items);
