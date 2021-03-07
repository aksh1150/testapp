const DECIMAL_NUMBER_REGEX = /^((\d{1,2}(,\d{3})+)|(\d+)(\.\d{0,2})?)$/
const NUMBERS_REGEX = /^\d+$/
const LETTERS_NUMBERS_REGEX = /^[A-Za-z0-9 _-]*[A-Za-z0-9][A-Za-z0-9 _-]*$/
const LETTERS_REGEX = /^[A-Za-z]*[A-Za-z][A-Za-z]*$/

function validateText(value, fieldName) {
  let error
  let isError = false
  if (!value) {
    error = "Required"
    isError = true
  } else if (value.length < 2) {
    error = `Enter valid value in ${fieldName} field!`
    isError = true
  } else if (!LETTERS_NUMBERS_REGEX.test(value)) {
    error = `Invalid value in ${fieldName} field! It allows only allow [A-Z, a-z] characters.`
    isError = true
  }
  return [error, isError]
}

function validateRadio(value, fieldName) {
  let error
  let isError = false
  if (!value) {
    error = `Select at least one option from ${fieldName} options!`
    isError = true
  }
  return [error, isError]
}

function validateDecimalNumbers(value, fieldName) {
  let error
  let isError = false
  if (!value) {
    error = "Required"
    isError = true
  } else if (!DECIMAL_NUMBER_REGEX.test(value)) {
    error = `Invalid value in ${fieldName} field! It allows only number and dot (120.50).`
    isError = true
  }
  return [error, isError]
}

function validateZipCode(value) {
  let error
  let isError = false
  if (!value) {
    error = "Required"
    isError = true
  } else if (!NUMBERS_REGEX.test(value)) {
    error = `Invalid value! It allows only numbers.`
    isError = true
  } else if (value.length > 5 || value.length < 5) {
    error = `Invalid value! It allows only 5 numbers.`
    isError = true
  }
  return [error, isError]
}

function validateAddress(value) {
  let error
  let isError = false
  if (!value) {
    error = "Required"
    isError = true
  } else if (value.length < 8) {
    error = `Address is too short! Enter valid address!`
    isError = true
  } else if (!LETTERS_NUMBERS_REGEX.test(value)) {
    error = `Invalid value! It allows only allow [A-Z, a-z] characters and (-, _).`
    isError = true
  }
  return [error, isError]
}

function validateState(value) {
  let error
  let isError = false
  if (!value) {
    error = "Required"
    isError = true
  } else if (value.length > 2 || value.length < 2) {
    error = `Invalid value! It allows only two characters.`
    isError = true
  } else if (!LETTERS_REGEX.test(value)) {
    error = `Invalid value! It allows only letters.`
    isError = true
  }
  return [error, isError]
}

export {
  validateText,
  validateDecimalNumbers,
  validateZipCode,
  validateRadio,
  validateAddress,
  validateState,
}
