const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

[...itemsEl].map((item) => {
  const itemLength = item.lastElementChild.querySelectorAll("li").length;
  const titleContent = item.firstElementChild;
  console.log(`Category: ${titleContent.textContent}
Elements: ${itemLength}`);
});
