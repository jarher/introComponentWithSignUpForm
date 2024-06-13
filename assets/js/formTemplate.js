// import { formElements } from "./formElementsData.js";

class FormTemplate {
  constructor() {
    this.inputElements = [];
  }
  createFormElements(formElements) {
    formElements.forEach((object) => {
      const { element, ...rest } = object;
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "input-wrapper";
      const input = document.createElement(element);
      const errorMessage = document.createElement("span");
      errorMessage.className = "input-error-message";
      errorMessage.setAttribute("aria-live", "polite");
      //get attributes and values to input
      const entries = Object.entries(rest);
      for (let entry of entries) {
        const [key, value] = entry;
        input.setAttribute(key, value ? value : "");
      }
      inputWrapper.appendChild(input);
      inputWrapper.appendChild(errorMessage);
      this.inputElements.push(inputWrapper);
    });
    return this.inputElements;
  }
  renderFormElements(parent, elements) {
    elements.forEach((child) => parent.appendChild(child));
  }
}

module.exports = FormTemplate;
