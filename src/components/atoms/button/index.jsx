import React from "react"
import PropTypes from "prop-types"
import "./button.css"

const Button = ({ onClick, btnType, children }) => (
  <button className={`btn btn-${btnType}`} onClick={onClick} type="submit">
    {children}
  </button>
)

Button.propTypes = {
  btnType: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ]).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
