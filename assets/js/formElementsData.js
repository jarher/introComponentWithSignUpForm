const formElements = [
  {
    element: "input",
    id: "firstName",
    class: "inputForm",
    type: "text",
    placeholder: "First Name",
    required: true,
    value: null,
  },
  {
    element: "input",
    id: "lastName",
    class: "inputForm",
    type: "text",
    placeholder: "Last Name",
    required: true,
    value: null,
  },
  {
    element: "input",
    id: "email",
    class: "inputForm",
    type: "email",
    placeholder: "Email Address",
    required: true,
    value: null,
  },
  {
    element: "input",
    id: "password",
    class: "inputForm",
    type: "password",
    placeholder: "Password",
    minlength: 8,
    required: true,
    value: null,
  },
  {
    element: "input",
    id: "submit",
    class: "inputForm submitButton",
    type: "submit",
    required: false,
    value: "claim your free trial",
  },
];
export default formElements;
// using for testing
// module.exports = formElements;
