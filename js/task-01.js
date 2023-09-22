const numberOfCategories = document.querySelector("#categories");
const categories = [...numberOfCategories.children];
console.log("Number of categories: ", categories.length);
categories.forEach((category) => {
  const categoriesArray = category.children;
  console.log("Category: ", categoriesArray[0].textContent);
  console.log("Elements: ", categoriesArray[1].children.length);
});
