const errorMessages = {
  firstNameError: {
    valueMissing: "First name cannot be empty",
    errorType: "Characters other than letters are not accepted",
  },
  lastNameError: {
    valueMissing: "Last name cannot be empty",
    errorType: "Characters other than letters are not accepted",
  },
  emailError: {
    valueMissing: "Email cannot be empty",
    errorType: "Looks like this is not an email",
  },
  passwordError: {
    valueMissing: "Password cannot be empty",
    errorType:
      "Your password must be at least 8 characters, a capital letter, a number, and a special character",
  },
};

class Validate {
  constructor() {
    //regular expressions
    this.regExpText = /[a-z\s]/gi;
    this.regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    this.regExpPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    document.querySelector("form").addEventListener("submit", function () {
      this.preventDefault();
    });
  }

  showErrorMessage(selector, message) {
    const selectorString = `${selector} + .input-error-message`;
    document.querySelector(selectorString).innerText = message;
  }

  firstNameValidate() {
    //regular expression to evaluate input text
    const firstName = document.getElementById("firstName");
    const isValid = this.regExpText.test(firstName.value);
    if (!firstName.value) {
      this.showErrorMessage(
        "#firstName",
        errorMessages.firstNameError.valueMissing
      );
      return;
    }
    if (!isValid) {
      this.showErrorMessage(
        "#firstName",
        errorMessages.firstNameError.errorType
      );
      return;
    }
  }

  lastNameValidate() {
    const lastName = document.getElementById("lastName");
    const isValid = this.regExpText.test(lastName.value);
    if (!lastName.value) {
      this.showErrorMessage(
        "#lastName",
        errorMessages.lastNameError.valueMissing
      );
      return;
    }
    if (!isValid) {
      this.showErrorMessage("#lastName", errorMessages.lastNameError.errorType);
      return;
    }
  }

  emailValidate() {
    const email = document.getElementById("email");
    const isValid = this.regExpEmail.test(email.value);
    if (!email.value) {
      this.showErrorMessage("#email", errorMessages.emailError.valueMissing);
      return;
    }
    if (!isValid) {
      this.showErrorMessage("#email", errorMessages.emailError.errorType);
    }
  }

  passwordValidate() {
    const password = document.getElementById("password");
    const isValid = this.regExpPassword.test(password.value);
    if (!password.value) {
      this.showErrorMessage(
        "#password",
        errorMessages.passwordError.valueMissing
      );
      return;
    }
    if (!isValid) {
      this.showErrorMessage("#password", errorMessages.passwordError.errorType);
      return;
    }
  }
}

module.exports = Validate;
