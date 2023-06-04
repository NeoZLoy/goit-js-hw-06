const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll(".login-form input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value.length == 0 ||
    event.currentTarget.elements.password.value.length == 0
  ) {
    window.alert("All inputs must be filled");
  } else {
    const formElements = event.currentTarget.elements;
    const formData = {
      [formElements.email.name]: formElements.email.value,
      [formElements.password.name]: formElements.password.value,
    };
    console.log(formData);
    formEl.reset();
  }
});

// Второй варинат проверки. Подскажите, какой более правильный?

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   inputEl.forEach((element) => {
//     if (element.value.length === 0) {
//       return window.alert("All inputs must be filled");
//     } else {
//       const formElements = event.currentTarget.elements;
//       const formData = {
//         [formElements.email.name]: formElements.email.value,
//         [formElements.password.name]: formElements.password.value,
//       };
//       console.log(formData);
//       formEl.reset();
//     }
//   });
// });
