const listCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, listCategories.length);


listCategories.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});










