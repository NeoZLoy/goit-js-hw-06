const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Создание элементов

createBtn.addEventListener("click", (event) => {
  const elementsQuantity = inputEl.value;
  const divArray = [];
  let divWidth = 30;

  // Создаем массив блоков
  do {
    divArray.push(document.createElement("div"));
  } while (divArray.length < elementsQuantity);
  console.log(divArray);

  // Добавляем стили для первого блока
  divArray[0].style.backgroundColor = getRandomHexColor();
  divArray[0].style.width = "30px";
  divArray[0].style.height = "30px";

  // Увеличиваем размеры и задаем цвета для последующих блоков
  for (let i = 1; i < elementsQuantity; i += 1) {
    divWidth += 10;
    divArray[i].style.backgroundColor = getRandomHexColor();
    divArray[i].style.width = `${divWidth}px`;
    divArray[i].style.height = `${divWidth}px`;
  }

  // Рендерим блоки
  boxesContainer.innerHTML = "";
  boxesContainer.append(...divArray);
});

// Удаление элементов

destroyBtn.addEventListener("click", (event) => {
  boxesContainer.innerHTML = "";
  inputEl.value = "";
});

// Функция для выбра рандом цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
