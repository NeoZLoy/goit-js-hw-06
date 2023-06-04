const incrementButton = document.querySelector(
  "button[data-action = 'increment']"
);

const decrementButton = document.querySelector(
  "button[data-action = 'decrement']"
);

const valueEl = document.querySelector("#value");

let counterValue = 0;

const onIncrementBtnClick = function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
  return valueEl.textContent;
};

const onDecrementBtnClick = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  return valueEl.textContent;
};

incrementButton.addEventListener("click", onIncrementBtnClick);
decrementButton.addEventListener("click", onDecrementBtnClick);
