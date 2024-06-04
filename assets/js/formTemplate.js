const formElements = [
  {
    element: "input",
    id: "firstName",
    class: "inputForm",
    type: "text",
    placeholder: "First Name",
    isRequired: true,
    value: null,
  },
  {
    element: "input",
    id: "lastName",
    class: "inputForm",
    type: "text",
    placeholder: "Last Name",
    isRequired: true,
    value: null,
  },
  {
    element: "input",
    id: "email",
    class: "inputForm",
    type: "email",
    placeholder: "Email Address",
    isRequired: true,
    value: null,
  },
  {
    element: "input",
    id: "password",
    class: "inputForm",
    type: "password",
    placeholder: "Password",
    isRequired: true,
    value: null,
  },
  {
    element: "input",
    id: "submit",
    class: "inputForm submitButton",
    type: "submit",
    placeholder: null,
    isRequired: null,
    value: "claim your free trial",
  },
];

export function createFormElements() {
  const form = document.querySelector("form");

  formElements.forEach((object) => {
    const { element, ...rest } = object;

    const input = document.createElement(element);

    const entries = Object.entries(rest);

    for (let entry of entries) {
      const [key, value] = entry;
      if (value) {
        key === "isRequired"
          ? input.setAttribute("required", "")
          : input.setAttribute(key, value);
      }
    }
    form.appendChild(input);
  });
}
