const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    return (textEl.textContent = "Anonymous");
  }

  return (textEl.textContent = event.currentTarget.value);
}
