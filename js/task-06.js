const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length <= inputEl.dataset.length) {
    return inputEl.classList.add("valid");
  }
  return inputEl.classList.add("invalid");
}
