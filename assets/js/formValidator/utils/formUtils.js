export const assignInputValue = (key, initialValues) => {
  document.getElementById(key).value = initialValues[key];
};

export const errorMessageControl = (errorMessage, id, rest) => {
  const { errorOutputClass, formControlClass } = rest;
  const parentContainer = document.getElementById(id).parentElement;
  parentContainer.querySelector(`.${errorOutputClass}`).innerText =
    errorMessage;
  let isInvalidValue = errorMessage ? true : false;

  // include class attribute to input parent container in case of errors
  isInvalidValue
    ? parentContainer.classList.add(formControlClass)
    : parentContainer.classList.remove(formControlClass);

  return isInvalidValue;
};
