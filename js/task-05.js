const nameOutputEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

nameInputEl.addEventListener("input", (event) => {
  if (nameInputEl.value.length !== 0) {
    nameOutputEl.textContent = event.currentTarget.value;
    console.log(nameInputEl.value.length);
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
});
