const numberOfCategories = document.querySelectorAll(".item");
const number = [...numberOfCategories];
console.log("Number of Categories: ", number.length);
const animalsTitle = number[0].children[0].childNodes[0].textContent;
console.log("Category: ", animalsTitle);
const animalsList = [number[0].children[1]];
const animalsElements = [];
animalsList.forEach((animal) => animalsElements.push(...animal.children));
console.log("Elements: ", animalsElements.length);
const productsTitle = number[1].children[0].childNodes[0].textContent;
console.log("Category: ", productsTitle);
const productList = [number[1].children[1]];
const productElements = [];
productList.forEach((product) => productElements.push(...product.children));
console.log("Elements: ", productElements.length);
const technologiesTitle = number[2].children[0].childNodes[0].textContent;
console.log("Category: ", technologiesTitle);
const technologiesList = [number[2].children[1]];
const technologiesElements = [];
technologiesList.forEach((techology) =>
  technologiesElements.push(...techology.children)
);
console.log("Elements: ", technologiesElements.length);
