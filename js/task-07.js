const fontSizeController = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeController.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
