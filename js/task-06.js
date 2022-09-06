const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const valueNumber = event.currentTarget.value.length;
  if (valueNumber <= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
      inputEl.classList.add("valid");
      return;
    }
    return;
  }
  inputEl.classList.add("invalid");
  return;
}
