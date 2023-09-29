const container = document.querySelector("#counter");
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');
const result = document.querySelector("#value");
let counter = 0;
increaseBtn.addEventListener("click", () => {
  counter += 1;
  result.textContent = counter;
});
decreaseBtn.addEventListener("click", () => {
  counter -= 1;
  result.textContent = counter;
});
