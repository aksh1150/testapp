import React from "react"
import PropTypes from "prop-types"

const Radio = ({
  id,
  name,
  children,
  onChange,
  defaultValue,
  errorFeedBack,
}) => {
  const isFieldError = errorFeedBack && errorFeedBack

  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id={id}
        name={name}
        className="custom-control-input"
        value={defaultValue}
        onChange={(e) => onChange(e)}
        style={{ borderColor: "#000000" }}
      />
      <label className="custom-control-label" htmlFor={id}>
        {children}
      </label>

      {isFieldError !== undefined && (
        <div
          className="invalid-feedback mt-4"
          style={{ display: "block", fontSize: "16px" }}
        >
          {errorFeedBack}
        </div>
      )}
    </div>
  )
}
Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  errorFeedBack: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
}

export default Radio
