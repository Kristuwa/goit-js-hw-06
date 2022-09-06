function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputRef: document.querySelector("input"),
  createBtnRef: document.querySelector("button[data-create]"),
  destroyBtnRef: document.querySelector("button[data-destroy]"),
  collectionRef: document.querySelector("#boxes"),
};

refs.inputRef.addEventListener("change", onCreateCollectionEl);

function createBoxes(amount) {
  let widthEl;
  let heightEl;
  const randomColor = getRandomHexColor();
  const elements = [];

  for (let i = 1; i <= amount; i += 1) {
    const collectionEl = document.createElement("div");
    elements.push(collectionEl);
  }

  for (let j = 0; j < elements.length; j += 1) {
    if (j === 0) {
      widthEl = 30;
      heightEl = 30;
    } else {
      widthEl += 10;
      heightEl += 10;
    }
    elements[j].style.width = `${widthEl}px`;
    elements[j].style.height = `${heightEl}px`;
    elements[j].style.backgroundColor = randomColor;
  }

  const elementString = elements.map((elem) => elem);
  return refs.collectionRef.append(...elementString);
}

function onCreateCollectionEl(event) {
  const minNumber = Number(refs.inputRef.min);
  const maxNumber = Number(refs.inputRef.max);

  if (
    event.currentTarget.value >= minNumber &&
    event.currentTarget.value <= maxNumber
  ) {
    return createBoxes(event.currentTarget.value);
  }

  return alert("Enter number from 1 to 100");
}

refs.destroyBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  refs.collectionRef.innerHTML = "";
}
