function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputRef: document.querySelector("input"),
  createBtnRef: document.querySelector("button[data-create]"),
  destroyBtnRef: document.querySelector("button[data-destroy]"),
  collectionRef: document.querySelector("#boxes"),
};

refs.createBtnRef.addEventListener("click", onCreateCollectionEl);

function createBoxes(amount) {
  let widthEl;
  let heightEl;
  const randomColor = getRandomHexColor();
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const collectionEl = document.createElement("div");
    if (i === 0) {
      widthEl = 30;
      heightEl = 30;
    } else {
      widthEl += 10;
      heightEl += 10;
    }

    collectionEl.style.width = `${widthEl}px`;
    collectionEl.style.height = `${heightEl}px`;
    collectionEl.style.backgroundColor = randomColor;

    elements.push(collectionEl);
  }

  const elementString = elements.map((elem) => elem);
  return refs.collectionRef.append(...elementString);
}

function onCreateCollectionEl(event) {
  const minNumber = Number(refs.inputRef.min);
  const maxNumber = Number(refs.inputRef.max);
  console.log(refs.inputRef.value);

  if (
    Number(refs.inputRef.value) >= minNumber &&
    Number(refs.inputRef.value) <= maxNumber
  ) {
    return createBoxes(refs.inputRef.value);
  }

  return alert("Enter number from 1 to 100");
}

refs.destroyBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  refs.collectionRef.innerHTML = "";
}
