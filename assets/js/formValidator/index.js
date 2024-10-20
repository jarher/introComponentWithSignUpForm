import { runError } from "./utils/errorHandling.js";
import { runFormEvents } from "./utils/eventHandlers.js";
import { setInitialInputStates } from "./utils/formState.js";
import ValidatorInitialize from "./validatorInitialize.js";

//initialize new form validator
//optionally return a resetValues function for restart input values.
//that function is invoke inside onSubmit called in formValidation object
const validate = (function () {
  const formValidation = (data) => {
    const requiredProperties = [
      "initialValues",
      "validatorSchema",
      "formEvents",
      "errorOutputClass",
      "formControlClass",
    ];
    // throw error if any formValidation property is missing
    runError(requiredProperties, data);
    // throw error if any validatorSchema property is missing

    for (let validatorKey of Object.keys(data.validatorSchema)) {
      const requiredProperties = ["type", "errors"];
      runError(requiredProperties, data.validatorSchema[validatorKey]);
    }

    new ValidatorInitialize(data, runFormEvents, setInitialInputStates);
  };
  const resetValues = ValidatorInitialize.resetValues;
  return { formValidation, resetValues };
})();

export default validate;
