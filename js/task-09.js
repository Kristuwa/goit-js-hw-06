function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

btnRef.addEventListener("click", onChangeColorBody);

function onChangeColorBody(event) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textColorRef.textContent = `${randomColor}`;
}
