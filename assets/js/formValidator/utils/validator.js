class Validator {
  static validate(value, validatorSchemaValues) {
    const { type, errors } = validatorSchemaValues;

    if (errors.hasOwnProperty("required") && !value) {
      return errors.required;
    }
    if (type === "string") {
      if (!/^[a-zA-Z]+$/.test(value)) {
        return errors.string;
      }
      if (errors.hasOwnProperty("min")) {
        if (value.length < errors.min.value) {
          return errors.min.error;
        }
      }
      if (errors.hasOwnProperty("max")) {
        if (value.length < errors.max.value) {
          return errors.min.error;
        }
      }
    }
    if (type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return errors.email;
      }
    }

    if (type === "password") {
      if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
      ) {
        return errors.password;
      }
    }
    if (type === "number") {
      if (!/^[0-9]+$/.test(value)) {
        return errors.number;
      }

      if (errors.hasOwnProperty("min")) {
        const numberLength = Number(value).toString().length;
        if (numberLength < errors.min.value) {
          return errors.min.error;
        }
      }

      if (errors.hasOwnProperty("max")) {
        const numberLength = Number(value).toString().length;
        if (numberLength > errors.max.value) {
          return errors.max.error;
        }
      }

      if (errors.hasOwnProperty("customValidation")) {
        return errors.customValidation(value);
      }
    }
  }
}

export default Validator;
