'use strict';

// task 1
const categories = document.querySelectorAll('.item');
console.log(`Number of categories ${categories.length}`);

// task 2
categories.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').innerText}`);
  console.log(`Elements: ${item.querySelectorAll('ul>li').length}`);
});
