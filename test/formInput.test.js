/**
 * @jest-environment jsdom
 */
const formElements = require("../assets/js/formElementsData.js");
const FormTemplate = require("../assets/js/formTemplate.js");
const Validate = require("../assets/js/validateForm.js");

//create virtual form for tests
const virtualDom = function (formTemplate, elements) {
  document.body.innerHTML = "<form novalidate></form>";

  const parent = document.querySelector("form");

  const template = new formTemplate();

  template.renderFormElements(parent, template.createFormElements(elements));
};

describe("form inputs validations", () => {
  let validate;

  beforeEach(() => {
    validate = new Validate();
    virtualDom(FormTemplate, formElements);
  });
  // first name validation
  test("validate if first name input is empty", () => {
    const inputElement = document.getElementById("firstName");

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isEmpty } = validate.listenInputs(inputElement);
      expect(!isEmpty).toBeTruthy();
    });
  });

  test("validate if first name has not an appropiate value", () => {
    const inputElement = document.getElementById("firstName");

    inputElement.value = "124";

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isValid } = validate.listenInputs(inputElement);
      expect(!isValid).toBeTruthy();
    });
  });
  //last name validation
  test("validate if last name input is empty", () => {
    const inputElement = document.getElementById("lastName");

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isEmpty } = validate.listenInputs(inputElement);
      expect(!isEmpty).toBeTruthy();
    });
  });

  test("validate if last name has not an appropiate value", () => {
    const inputElement = document.getElementById("lastName");

    inputElement.value = "124";

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isValid } = validate.listenInputs(inputElement);
      expect(!isValid).toBeTruthy();
    });
  });
  //email validation
  test("validate if email input is empty", () => {
    const inputElement = document.getElementById("email");

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isEmpty } = validate.listenInputs(inputElement);
      expect(!isEmpty).toBeTruthy();
    });
  });

  test("validate if email has not an appropiate value", () => {
    const inputElement = document.getElementById("email");

    inputElement.value = "124";

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isValid } = validate.listenInputs(inputElement);
      expect(!isValid).toBeTruthy();
    });
  });
  //password validation
  test("validate if password input is empty", () => {
    const inputElement = document.getElementById("password");

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isEmpty } = validate.listenInputs(inputElement);
      expect(!isEmpty).toBeTruthy();
    });
  });

  test("validate if password has not an appropiate value", () => {
    const inputElement = document.getElementById("password");

    inputElement.value = "124";

    const inputEvent = new Event("input");

    inputElement.dispatchEvent(inputEvent);

    document.addEventListener("input", (e) => {
      const { isValid } = validate.listenInputs(inputElement);
      expect(!isValid).toBeTruthy();
    });
  });
});
