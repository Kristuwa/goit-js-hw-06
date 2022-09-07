const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl.value);
textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", onChangeSize);

function onChangeSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
