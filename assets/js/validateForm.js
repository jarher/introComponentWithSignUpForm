class Validate {
  constructor() {
    // Regular expressions
    this.regExpText = /[a-z]/i;
    this.regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.regExpPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.submitBtn = document.getElementById("submit");
  }

  disabledSubmitBtn(isValid) {
    !isValid
      ? (this.submitBtn.disabled = true)
      : (this.submitBtn.disabled = false);
  }

  validator(inputElement) {
    const type = inputElement.getAttribute("type");
    const id = inputElement.getAttribute("id");
    const inputValue = inputElement.value.trim();

    let isValid;

    if (type === "text") {
      isValid = this.regExpText.test(inputValue);
    }
    if (type === "email") {
      isValid = this.regExpEmail.test(inputValue);
    }
    if (type === "password") {
      isValid = this.regExpPassword.test(inputValue);
    }
    if (inputValue === "") {
      return { isEmpty: true, isValid: false, type, id };
    }
    if (!isValid) {
      return { isEmpty: false, isValid: false, type, id };
    }
    return { isEmpty: false, isValid: true, type, id };
  }

  listenInputs(inputElement) {
    const result = this.validator(inputElement);
    const { isValid } = result;
    this.disabledSubmitBtn(isValid);
    return result;
  }

  submit(e, inputs) {
    const inputStates = [];
    e.preventDefault();
    Array.from(inputs)
      .filter((input) => {
        if (input.getAttribute("placeholder") !== "") {
          return input;
        }
      })
      .forEach((element) => inputStates.push(this.listenInputs(element)));

    return inputStates;
  }
}

export default Validate;

//using for testing
// module.exports = Validate;
