const form = document.querySelector("form");

// grab all divs except the last one
const fields = form.querySelectorAll("div:not(:last-of-type)");

export default () => {
  console.log(fields);
};
