const formEl = document.querySelector(".login-form");
const inputElements = document.querySelectorAll(".login-form input");

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

// Второй варинат проверки. Вроде легче масштабируемый, но кривоватый :с

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   inputElements.forEach((element) => {
//     if (element.value !== "") {
//       const formElements = event.currentTarget.elements;
//       const formData = {
//         [formElements.email.name]: formElements.email.value,
//         [formElements.password.name]: formElements.password.value,
//       };
//       console.log(formData);
//       console.log(event.currentTarget.elements);
//       formEl.reset();
//     }
//     return window.alert("All inputs must be filled");
//   });
// });
