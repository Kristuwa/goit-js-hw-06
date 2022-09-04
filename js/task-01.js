const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

[...itemsEl].map((item) => {
  const itemLength = item.querySelectorAll("li").length;
  const titleContent = item.querySelector("h2");
  console.log(`Category: ${titleContent.textContent}
	Elements: ${itemLength}`);
});
