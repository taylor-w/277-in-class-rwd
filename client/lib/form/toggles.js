const form = document.querySelector("form");

// grab all divs except the last one
const fields = form.querySelectorAll("div:not(:last-of-type)");

// We need to separate out the 'special' from the 'regular' fields
// TODO: Write a filter that will return out anything that doesn't have a 'data-status' attribute (HINT: hasAttribute("data-status"))

const regularFields = [...fields].filter(
  (field) => !field.hasAttribute("data-status")
);

export default () => {
  console.log(fields);
  console.log(regularFields);
};
