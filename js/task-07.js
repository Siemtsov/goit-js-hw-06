const input = document.querySelector("#font-size-control");
console.log(input);
const text = document.querySelector("#text");
const arr = [];
input.addEventListener("input", (evt) => {
  text.style.fontSize = `${evt.target.value}px`;
});
