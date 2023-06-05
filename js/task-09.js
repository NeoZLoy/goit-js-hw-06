const buttonEl = document.querySelector(".change-color");
const colorOutputEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
buttonEl.addEventListener("click", (event) => {
  const bgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = bgColor;
  colorOutputEl.textContent = bgColor;
});

console.log(bodyEl);
