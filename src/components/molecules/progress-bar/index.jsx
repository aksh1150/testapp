import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./progress-bar.css"

function ProgressBar({ steps }) {
  return (
    <div className="custom-container">
      <ul className="steps-bar">
        {steps.map((step) => {
          return (
            <li
              id={step.stepId}
              key={step.stepId}
              className={`step-item ${step.stepSuccess}`}
              step-name={step.stepName}
            >
              <div>
                <span className="stepIcon">
                  <FontAwesomeIcon icon={step.stepIcon} />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
ProgressBar.propTypes = {
  steps: PropTypes.array.isRequired,
}

export default ProgressBar
