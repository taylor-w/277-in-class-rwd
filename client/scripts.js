import { validate } from "./validation.mjs";

/*nav*/
const nav = document.querySelector("nav");

document.querySelector(".fa-hamburger").addEventListener("click", () => {
  nav.classList.replace("is-collapsed", "is-expanded") ||
    nav.classList.replace("is-expanded", "is-collapsed");
});

/*form*/
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validate();
  });
});
