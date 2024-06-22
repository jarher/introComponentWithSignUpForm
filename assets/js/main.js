import Messages from "./errorMessages.js";
import formElements from "./formElementsData.js";
import FormTemplate from "./formTemplate.js";
import Validate from "./validateForm.js";

const template = new FormTemplate();

template.renderFormElements(
  document.querySelector("form"),
  template.createFormElements(formElements)
);

const form = document.querySelector("form");

const validate = new Validate();

document.addEventListener("input", (e) => {
  const inputElement = document.getElementById(e.target.id);
  const validationMessages = new Messages(validate.listenInputs(inputElement));
  validationMessages.checkStates();
});

form.addEventListener("submit", (e) => {
  const inputs = document.querySelectorAll("input");
  const validStates = validate.submit(e, inputs);

  validStates.forEach((state) => {
    const validationMessages = new Messages(state);
    validationMessages.checkStates();
  });

  if (validStates.every((state) => state.isValid)) {
    alert("Thanks for submit your data");
    Array.from(inputs)
      .filter((input) => input.getAttribute("type") !== "submit")
      .forEach((input) => (input.value = ""));
  }
});
