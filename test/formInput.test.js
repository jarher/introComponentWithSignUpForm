/**
 * @jest-environment jsdom
 */
const formElements = require("../assets/js/formElementsData.js");
const FormTemplate = require("../assets/js/formTemplate.js");
const Validate = require("../assets/js/validateForm.js");

const virtualDom = require("./validate.test.js");

test("validate if first name input is empty", () => {
  virtualDom(FormTemplate, formElements);

  document.getElementById("firstName").value = "";

  const inputEvent = new Event("input");

  const validate = new Validate();

  document.getElementById("firstName").dispatchEvent(inputEvent);

  validate.firstNameValidate();

  expect(
    document.querySelector(`#firstName + .input-error-message`).innerText
  ).toMatch(/First name cannot be empty/);
});

test("validate if first name input has a value", () => {
  virtualDom(FormTemplate, formElements);

  document.getElementById("firstName").value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  document.getElementById("firstName").dispatchEvent(inputEvent);

  validate.firstNameValidate();

  expect(
    document.querySelector(`#firstName + .input-error-message`).innerText
  ).toMatch(/Characters other than letters are not accepted/);
});

test("validate if last name input is empty", () => {
  virtualDom(FormTemplate, formElements);
  document.getElementById("lastName").value = "";
  const inputEvent = new Event("input");
  const validate = new Validate();
  document.getElementById("lastName").dispatchEvent(inputEvent);
  validate.lastNameValidate();
  expect(
    document.querySelector(`#lastName + .input-error-message`).innerText
  ).toMatch(/Last name cannot be empty/);
});

test("validate if last name input has a value", () => {
  virtualDom(FormTemplate, formElements);

  document.getElementById("lastName").value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  document.getElementById("lastName").dispatchEvent(inputEvent);

  validate.lastNameValidate();

  expect(
    document.querySelector(`#lastName + .input-error-message`).innerText
  ).toMatch(/Characters other than letters are not accepted/);
});

test("validate if email input is empty", () => {
  virtualDom(FormTemplate, formElements);
  document.getElementById("email").value = "";
  const inputEvent = new Event("input");
  const validate = new Validate();
  document.getElementById("email").dispatchEvent(inputEvent);
  validate.emailValidate();
  expect(
    document.querySelector(`#email + .input-error-message`).innerText
  ).toMatch(/Email cannot be empty/);
});

test("validate if email input has a value", () => {
  virtualDom(FormTemplate, formElements);

  document.getElementById("email").value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  document.getElementById("email").dispatchEvent(inputEvent);

  validate.emailValidate();

  expect(
    document.querySelector(`#email + .input-error-message`).innerText
  ).toMatch(/Looks like this is not an email/);
});

test("validate if password input is empty", () => {
  virtualDom(FormTemplate, formElements);
  document.getElementById("password").value = "";
  const inputEvent = new Event("input");
  const validate = new Validate();
  document.getElementById("password").dispatchEvent(inputEvent);
  validate.passwordValidate();
  expect(
    document.querySelector(`#password + .input-error-message`).innerText
  ).toMatch(/Password cannot be empty/);
});

test("validate if password input has a value", () => {
  virtualDom(FormTemplate, formElements);

  document.getElementById("password").value = "124";

  const inputEvent = new Event("input");

  const validate = new Validate();

  document.getElementById("password").dispatchEvent(inputEvent);

  validate.passwordValidate();

  expect(
    document.querySelector(`#password + .input-error-message`).innerText
  ).toMatch(
    /Your password must be at least 8 characters, a capital letter, a number, and a special character/
  );
});
