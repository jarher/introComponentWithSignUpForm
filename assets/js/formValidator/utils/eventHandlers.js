import { changeState } from "./formState.js";

const addHandler = ({ handler, eventValidatorProps }) => {
  const handlerProps = {
    initialValuesKeys: eventValidatorProps.initialValuesKeys,
    changeErrorStateProps: {
      validatorSchema: eventValidatorProps.validatorSchema,
      hasErrors: eventValidatorProps.hasErrors, // Uses original array
      rest: eventValidatorProps.rest,
    },
  };
  handler(handlerProps);
};

const submitEventHandler = ({ initialValuesKeys, changeErrorStateProps }) => {
  // run validation if triggered submit event
  const { hasErrors, rest } = changeErrorStateProps;
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    initialValuesKeys.forEach((inputId) => {
      changeState(changeErrorStateProps, inputId);
    });
    if (hasErrors.length > 0) {
      const hasInvalidValues = hasErrors
        .map((el) => el.isInvalid)
        .some((value) => value === true);

      if (!hasInvalidValues) {
        const inputValues = initialValuesKeys.map((id) => {
          return { idValue: id, value: document.getElementById(id).value };
        });
        if (rest.onSubmit) {
          rest.onSubmit(inputValues);
        }
      }
    }
  });
};

const blurEventHandler = ({ changeErrorStateProps }) => {
  //run validation if triggered blur event
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", (e) => {
      const inputId = e.target.id;
      changeState(changeErrorStateProps, inputId);
    });
  });
};

export const runFormEvents = (
  { validatorSchema, formEvents, ...rest },
  initialValuesKeys,
  hasErrors
) => {
  formEvents
    .map((event) => ({
      handler: event === "blur" ? blurEventHandler : submitEventHandler,
      eventValidatorProps: {
        initialValuesKeys,
        validatorSchema,
        hasErrors,
        rest,
      },
    }))
    .forEach((formEventsObject) => addHandler(formEventsObject));
};
