const fontSizeController = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${fontSizeController.value}px`;
fontSizeController.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
