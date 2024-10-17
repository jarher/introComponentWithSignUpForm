export const runError = (data) => {
  try {
    validateRequiredProperties(data);
  } catch (error) {
    console.error(error.message);
  }
};

const validateRequiredProperties = (data) => {
  const requiredProperties = [
    "initialValues",
    "validatorSchema",
    "formEvents",
    "errorOutputSelector",
    "formControlAttribute",
  ];

  const missingProperties = requiredProperties.filter(
    (property) => !data.hasOwnProperty(property)
  );

  if (missingProperties.length > 0)
    throw new Error(
      `Missing required properties in form data: ${missingProperties.join(
        ", "
      )}`
    );
};
