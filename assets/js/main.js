import { formValidation } from "./formComponent/mainComponent/myForm.js";
import renderFormTemplate from "./formComponent/formTemplate/renderTemplate.js";

renderFormTemplate();

const validatorSchema = {
  firstName: {
    type: "string",
    errors: {
      string: "Characters other than letters are not accepted",
      min: "The first name must be at least 3 characters long",
      required: "cannot be empty",
    },
  },
  lastName: {
    type: "string",
    errors: {
      string: "Characters other than letters are not accepted",
      min: "The last name must be at least 3 characters long",
      required: "cannot be empty",
    },
  },
  email: {
    type: "email",
    errors: {
      email: "Looks like this is not an email",
      required: "Email cannot be empty",
    },
  },
  password: {
    type: "password",
    errors: {
      password:
        "Your password must be at least 8 characters, a capital letter, a number, and a special character",
      required: "Password cannot be empty",
    },
  },
};

const formEvents = [
  {
    eventType: "submit",
    element: document.querySelector("form"),
  },
  {
    eventType: "blur",
    element: Array.from(document.querySelectorAll("input")),
  },
];

formValidation({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  validatorSchema,
  formEvents,
  errorOutputSelector: ".input-error-message",
  formControlAttribute: "form-error",
  onSubmit: (values) => {
    const [firstName, lastName, email, password] = values;
    alert(`Thanks for submit your data.
      these are your data:
      first name = ${firstName}
      last name = ${lastName}
      email = ${email}
      password = ${password}`);
  },
});
