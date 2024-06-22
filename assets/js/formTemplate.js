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

      const errorImg = document.createElement("img");
      errorImg.className = "error-icon";
      errorImg.setAttribute("src", "./assets/images/icon-error.svg");
      errorImg.setAttribute("alt", "error icon");
      //get attributes and values to input
      const entries = Object.entries(rest);
      for (let [key, value] of entries) {
        if (key === "required") {
          if (value) {
            input.setAttribute(key, "");
          }
        } else {
          input.setAttribute(
            key === "value" ? "value" : key,
            value !== null ? value : ""
          );
        }
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
