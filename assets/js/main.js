import renderFormTemplate from "./formComponent/formTemplate/renderTemplate.js";
import validate from "./formValidator/index.js";

const { formValidation, resetValues } = validate;

renderFormTemplate();

const validatorSchema = {
  firstName: {
    type: "string",
    errors: {
      message: "Characters other than letters are not accepted",
      min: {
        value: 3,
        message: "The first name must be at least 3 characters long",
      },
      required: "cannot be empty",
    },
  },
  lastName: {
    type: "string",
    errors: {
      message: "Characters other than letters are not accepted",
      min: {
        value: 3,
        message: "The last name must be at least 3 characters long",
      },
      required: "cannot be empty",
    },
  },
  email: {
    type: "email",
    errors: {
      message: "Looks like this is not an email",
      required: "Email cannot be empty",
    },
  },
  password: {
    type: "password",
    errors: {
      message:
        "Your password must be at least 8 characters, a capital letter, a number, and a special character",
      required: "Password cannot be empty",
    },
  },
};

const formEvents = ["submit", "blur"];

formValidation({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  validatorSchema,
  formEvents,
  errorOutputClass: "input-error-message",
  formControlClass: "form-error",
  onSubmit: (values) => {
    const [firstName, lastName, email, password] = values;
    alert(`Thanks for submit your data.
      these are your data:
      first name = ${firstName.value}
      last name = ${lastName.value}
      email = ${email.value}
      password = ${password.value}`);
    resetValues();
  },
});
