/*nav*/
const nav = document.querySelector('nav')

document.querySelector('.fa-hamburger').addEventListener('click', () => {
  nav.classList.replace('is-collapsed', 'is-expanded') ||
  nav.classList.replace('is-expanded', 'is-collapsed')
})

/*form*/
const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('blur', (event) => {
    const currentInput = event.target

    if (!currentInput.value) {
      currentInput.classList.replace("is-success","is-error") || currentInput.classList.add("is-error")
    } else {
      currentInput.classList.replace("is-error", "is-success") || currentInput.classList.add("is-success")
    }
  })
})
