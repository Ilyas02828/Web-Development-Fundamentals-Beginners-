const menuButton = document.querySelector("#menu-btn");
const navBar = document.querySelector(".nav-bar");

const themeButton = document.querySelector("#theme-btn");

const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const errorMessages = document.querySelectorAll(".error");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  errorMessages.forEach((error) => {
    error.textContent = "";
    error.classList.remove("show");
  });

  if (nameInput.value.trim() === "") {
    errorMessages[0].textContent = "Name is required.";
    errorMessages[0].classList.add("show");

    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    errorMessages[1].textContent = "Email is required.";
    errorMessages[1].classList.add("show");

    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully!");
    form.reset();
  }
});
