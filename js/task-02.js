const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");
const arrLi = [];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = "item";
  arrLi.push(li);
});
container.append(...arrLi);
