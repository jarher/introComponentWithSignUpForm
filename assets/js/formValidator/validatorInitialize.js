class ValidatorInitialize {
  constructor(formValidationData, runFormEvents, setInitialInputStates) {
    // this.validateRequiredProperties(formValidationData);
    this.inputFieldKeys = Object.keys(formValidationData.initialValues);
    this.validationErrors = setInitialInputStates(
      this.inputFieldKeys,
      formValidationData.initialValues
    );
    runFormEvents(
      formValidationData,
      this.inputFieldKeys,
      this.validationErrors
    );
  }

  static resetValues() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }
}

export default ValidatorInitialize;
