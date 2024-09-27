// import { formElements } from "./formElementsData.js";

class FormTemplate {
  constructor() {
    this.inputElements = [];
  }
  createFormElements(formElements) {
    formElements.forEach((object) => {
      const { element, ...rest } = object;
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "form-wrapper";

      const input = document.createElement(element);

      const errorMessage = document.createElement("span");
      errorMessage.className = "input-error-message";
      errorMessage.setAttribute("aria-live", "polite");

      const errorImg = document.createElement("img");
      errorImg.className = "error-icon";
      errorImg.setAttribute("src", "./assets/images/icon-error.svg");
      errorImg.setAttribute("alt", "error icon");
      //get attributes and values to input
      if (rest.hasOwnProperty("placeholder")) {
        input.setAttribute("placeholder", rest.placeholder);
        delete rest["placeholder"];
      }

      const entries = Object.entries(rest);
      for (let [key, value] of entries) {
        input.setAttribute(key, value);
      }
      inputWrapper.appendChild(input);
      inputWrapper.appendChild(errorMessage);
      inputWrapper.appendChild(errorImg);
      this.inputElements.push(inputWrapper);
    });
    return this.inputElements;
  }
  renderFormElements(parent, elements) {
    elements.forEach((child) => parent.appendChild(child));
  }
}

export default FormTemplate;
// using for testing
// module.exports = FormTemplate;
