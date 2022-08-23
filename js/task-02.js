const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function getListContent() { 
  let result = []; 
  
for (let i = 0; i < ingredients.length; i += 1) { 
let li = document.createElement('li'); 
  li.append(i);

  li.textContent = `${ingredients[i]}`;
  li.classList.add(`item`);

  result.push(li);
} 
  return result;
  
} 

const ul = document.querySelector('#ingredients');

ul.append(...getListContent());




