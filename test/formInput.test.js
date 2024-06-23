/**
 * @jest-environment jsdom
 */
const formElements = require("../assets/js/formElementsData.js");
const FormTemplate = require("../assets/js/formTemplate.js");
const Validate = require("../assets/js/validateForm.js");

const virtualDom = function (formTemplate, elements) {
  document.body.innerHTML = "<form novalidate></form>";

  const parent = document.querySelector("form");

  const template = new formTemplate();

  template.renderFormElements(parent, template.createFormElements(elements));
};
// first name validation
test("validate if first name input is empty", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("firstName");

  // inputElement.value = "";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isEmpty } = validate.listenInputs(inputElement);
    expect(!isEmpty).toBeTruthy();
  });
});

test("validate if first name has not an appropiate value", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("firstName");

  inputElement.value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isValid } = validate.listenInputs(inputElement);
    expect(!isValid).toBeTruthy();
  });
});
//last name validation
test("validate if last name input is empty", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("lastName");

  // inputElement.value = "";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isEmpty } = validate.listenInputs(inputElement);
    expect(!isEmpty).toBeTruthy();
  });
});

test("validate if last name has not an appropiate value", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("lastName");

  inputElement.value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isValid } = validate.listenInputs(inputElement);
    expect(!isValid).toBeTruthy();
  });
});
//email validation
test("validate if email input is empty", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("email");

  // inputElement.value = "";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isEmpty } = validate.listenInputs(inputElement);
    expect(!isEmpty).toBeTruthy();
  });
});

test("validate if email has not an appropiate value", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("email");

  inputElement.value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isValid } = validate.listenInputs(inputElement);
    expect(!isValid).toBeTruthy();
  });
});
//password validation
test("validate if password input is empty", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("password");

  // inputElement.value = "";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isEmpty } = validate.listenInputs(inputElement);
    expect(!isEmpty).toBeTruthy();
  });
});

test("validate if password has not an appropiate value", () => {
  virtualDom(FormTemplate, formElements);

  const inputElement = document.getElementById("password");

  inputElement.value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  inputElement.dispatchEvent(inputEvent);

  document.addEventListener("input", (e) => {
    const { isValid } = validate.listenInputs(inputElement);
    expect(!isValid).toBeTruthy();
  });
});
