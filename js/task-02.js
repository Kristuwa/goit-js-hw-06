const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientItem = (ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");

  const textEl = document.createElement("p");
  textEl.textContent = ingredient;

  itemEl.appendChild(textEl);
  console.log(itemEl);
  return itemEl;
};

const elements = ingredients.map(ingredientItem);

console.log(elements);

const listEl = document.querySelector("#ingredients");
console.log(listEl);
listEl.append(...elements);
