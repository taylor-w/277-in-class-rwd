import { nav, validation } from "./lib/index.js";

// call functions
// nav
nav();

// validation IF on /form/ page
switch (location.pathname) {
  case "/form/":
    validation();
}
