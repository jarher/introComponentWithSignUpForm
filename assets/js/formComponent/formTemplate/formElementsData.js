const formElements = [
  {
    element: "input",
    id: "firstName",
    class: "inputForm",
    type: "text",
    placeholder: "First Name",
  },
  {
    element: "input",
    id: "lastName",
    class: "inputForm",
    type: "text",
    placeholder: "Last Name",
  },
  {
    element: "input",
    id: "email",
    class: "inputForm",
    type: "email",
    placeholder: "Email Address",
  },
  {
    element: "input",
    id: "password",
    class: "inputForm",
    type: "password",
    placeholder: "Password",
    minlength: 8,
  },
];
export default formElements;
// using for testing
// module.exports = formElements;
