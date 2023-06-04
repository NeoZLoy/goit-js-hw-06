const categoriesList = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((category) => {
  console.log("name:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
