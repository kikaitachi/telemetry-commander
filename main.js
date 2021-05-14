const addItem = (id, content) => {
  const itemContainer = document.createElement("div");
  itemContainer.innerHTML = content;
  document.body.appendChild(itemContainer);
};

for (let i = 0; i < 45; i++) {
  addItem(i, "<p>Test item " + i + "</p>");
}
