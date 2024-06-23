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

function runValidation(messages, validation) {
  const validationMessages = new messages(validation);
  validationMessages.checkStates();
}
document.addEventListener("input", (e) => {
  const inputElement = document.getElementById(e.target.id);
  runValidation(Messages, validate.listenInputs(inputElement));
});

form.addEventListener("submit", (e) => {
  const inputs = document.querySelectorAll("input");
  const validStates = validate.submit(e, inputs);

  validStates.forEach((state) => {
    runValidation(Messages, state);
  });

  if (validStates.every((state) => state.isValid)) {
    alert("Thanks for submit your data");
    Array.from(inputs)
      .filter((input) => input.getAttribute("type") !== "submit")
      .forEach((input) => (input.value = ""));
  }
});
