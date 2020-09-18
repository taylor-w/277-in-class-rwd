/*form inputs */
const inputs = document.querySelectorAll("input");

export default () => {
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const currentInput = event.target;
      const regex = new RegExp(currentInput.pattern);
      // IF regex doesn't pass and value doesn't exist
      if (
        !regex.test(currentInput.value.toUpperCase()) ||
        !currentInput.value
      ) {
        currentInput.classList.replace("is-success", "is-error") ||
          currentInput.classList.add("is-error");
      } else {
        currentInput.classList.replace("is-error", "is-success") ||
          currentInput.classList.add("is-success");
      }
    });
  });
};
