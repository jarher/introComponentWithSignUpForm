import formElements from "./formElementsData.js";
import FormTemplate from "./formTemplate.js";

const renderFormTemplate = () => {
  const template = new FormTemplate();
  template.renderFormElements(
    document.querySelector(".form-content"),
    template.createFormElements(formElements)
  );
};

export default renderFormTemplate;
