export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


export const required = (value) => {
    if(value) return undefined;
    return "Поле пустое";
}

export const maxLength = (maxLength) => (value) => {
    if(value.length > maxLength) return "Много символов";
    return undefined;
}