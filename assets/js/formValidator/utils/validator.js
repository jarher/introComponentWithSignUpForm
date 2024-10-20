class Validator {
  static validate(value, validatorSchemaValues) {
    // default regular expressions
    const stringRegExp = /^[a-zA-Z]+$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegExp =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const numberRegExp = /^[0-9]+$/;
    const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    const { type, errors } = validatorSchemaValues;

    const testingErrorProperties = {
      string: { regExp: stringRegExp, error: errors.message },
      email: { regExp: emailRegExp, error: errors.message },
      password: { regExp: passwordRegExp, error: errors.message },
      number: { regExp: numberRegExp, error: errors.message },
      tel: { regExp: phoneRegExp, error: errors.message },
    };

    if (errors.hasOwnProperty("required") && !value) {
      return errors.required;
    }

    return Validator.testingError(
      testingErrorProperties[type],
      validatorSchemaValues,
      value
    );
  }

  static testingError({ regExp, error }, validatorSchemaValues, value) {
    const { type, errors } = validatorSchemaValues;
    const patternRegExpValue = validatorSchemaValues.regExp || regExp;
    const lengthError = Validator.testingValueLengthError(type, errors, value);
    const customValidation = Validator.customValidation(errors, value);

    if (type === "password" && customValidation) return customValidation;
    if (lengthError) return lengthError;
    if (!patternRegExpValue.test(value)) return error;
    return customValidation;
  }

  static testingValueLengthError(type, errors, value) {
    const valueToEvaluate =
      type === "number" ? Number(value).toString().length : value.length;

    if (errors.hasOwnProperty("min")) {
      if (valueToEvaluate < errors.min.value) return errors.min.message;
    }

    if (errors.hasOwnProperty("max")) {
      if (valueToEvaluate > errors.max.value) return errors.max.message;
    }
  }

  static customValidation(errors, value) {
    if (errors.hasOwnProperty("customValidation")) {
      return errors.customValidation(value);
    }
  }
}

export default Validator;
