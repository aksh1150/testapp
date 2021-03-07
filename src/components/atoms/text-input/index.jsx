import React from "react"
import PropTypes from "prop-types"

const TextInput = ({
  id,
  label,
  type,
  errorFeedBack,
  onChange,
  inputSize,
  defaultValue,
}) => {
  const isFieldError = errorFeedBack && errorFeedBack
  const isInnValidClass = errorFeedBack && isFieldError[1] && "is-invalid"

  let setInputSize
  switch (inputSize) {
    case "md":
      setInputSize = ["col-sm-2", "col-sm-10"]
      break
    case "sm":
      setInputSize = ["col-sm-3", "col-sm-9"]
      break
    default:
      setInputSize = ["col-sm-1", "col-sm-11"]
      break
  }

  return (
    <div className="form-group row">
      <label
        htmlFor={id}
        className={`${setInputSize[0]} col-form-label`}
        style={{ fontSize: "18px" }}
      >
        {label}:
      </label>
      <div className={setInputSize[1]}>
        <input
          type={type}
          className={`form-control was-validated ${isInnValidClass}`}
          id={id}
          onChange={(event) => onChange(event)}
          value={defaultValue}
          placeholder={label}
          style={{ borderRadius: "0px" }}
        />
        {isFieldError !== undefined && (
          <div
            className="invalid-feedback"
            style={{ display: "block", fontSize: "16px" }}
          >
            {errorFeedBack}
          </div>
        )}
      </div>
    </div>
  )
}
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number"]).isRequired,
  inputSize: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  errorFeedBack: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
}

export default TextInput
