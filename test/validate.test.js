/**
 * @jest-environment jsdom
 */

const formElements = require("../assets/js/formElementsData.js");
const FormTemplate = require("../assets/js/formTemplate.js");

const virtualDom = function (formTemplate, elements) {
  document.body.innerHTML = "<form novalidate></form>";

  const parent = document.querySelector("form");

  const template = new formTemplate();

  template.renderFormElements(parent, template.createFormElements(elements));
};

test("Verify if formElements exists", () => {
  expect(formElements).toBeDefined();
});

test("A data array is expected that has the objects needed", () => {
  expect(formElements).toEqual([
    {
      element: "input",
      id: "firstName",
      class: "inputForm",
      type: "text",
      placeholder: "First Name",
      value: null,
    },
    {
      element: "input",
      id: "lastName",
      class: "inputForm",
      type: "text",
      placeholder: "Last Name",
      value: null,
    },
    {
      element: "input",
      id: "email",
      class: "inputForm",
      type: "email",
      placeholder: "Email Address",
      value: null,
    },
    {
      element: "input",
      id: "password",
      class: "inputForm",
      type: "password",
      placeholder: "Password",
      minlength: 8,
      value: null,
    },
    {
      element: "input",
      id: "submit",
      class: "inputForm submitButton",
      type: "submit",
      placeholder: null,
      isRequired: null,
      value: "claim your free trial",
    },
  ]);
});

test("verify if input elements is included in DOM", () => {
  virtualDom(FormTemplate, formElements);
  expect(document.querySelectorAll("input").length).toBe(5);
});

module.exports = virtualDom;
