export const runError = (requiredProperties, data) => {
  try {
    validateRequiredProperties(requiredProperties, data);
  } catch (error) {
    console.error(error.message);
  }
};

const validateRequiredProperties = (requiredProperties, data) => {
  const missingProperties = requiredProperties.filter(
    (property) => !data.hasOwnProperty(property)
  );

  if (missingProperties.length > 0)
    throw new Error(
      `Missing required properties: ${missingProperties.join(", ")}`
    );
};
