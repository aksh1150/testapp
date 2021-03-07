import React, { useState } from "react"
import { Heading } from "../../atoms"
import {
  PackageWeightForm,
  ProgressBar,
  ReceiverForm,
  ReviewAndConfirm,
  SenderForm,
  ShippingOptionsForm,
} from "../../molecules"
import {
  validateText,
  validateRadio,
  validateDecimalNumbers,
  validateZipCode,
  validateAddress,
  validateState,
} from "../../../utils/validation"

import useVisualMode from "../../../hooks/useVisualMode"
import steps from "../../../data/ProgressBar"

function ShippingLabelMaker() {
  const [showErrors, setShowErrors] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [state, setState] = useState({
    from: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    to: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    weight: "",
    shipping: "",
  })

  const { mode, transition } = useVisualMode(1)

  const nextPage = (event) => {
    event.preventDefault()
    if (mode === 1) {
      setShowErrors(true)
      if (
        !validateText(state.from.name)[1] &&
        !validateAddress(state.from.street)[1] &&
        !validateText(state.from.city)[1] &&
        !validateState(state.from.state)[1] &&
        !validateZipCode(state.from.zip)[1]
      ) {
        transition(mode + 1)
        setShowErrors(false)
      }
    }
    if (mode === 2) {
      setShowErrors(true)
      if (
        !validateText(state.to.name)[1] &&
        !validateAddress(state.to.street)[1] &&
        !validateText(state.to.city)[1] &&
        !validateState(state.from.state)[1] &&
        !validateZipCode(state.to.zip)[1]
      ) {
        transition(mode + 1)
        setShowErrors(false)
      }
    }

    if (mode === 3) {
      setShowErrors(true)
      if (!validateDecimalNumbers(state.weight)[1]) {
        transition(mode + 1)
        setShowErrors(false)
      }
    }
    if (mode === 4) {
      setShowErrors(true)

      if (!validateRadio(state.shipping)[1]) {
        transition(mode + 1)
        setShowErrors(false)
      }
    }

    if (window.innerWidth < "500") {
      window.scrollTo(0, 200)
    }
  }

  const prevPage = (event) => {
    event.preventDefault()
    setState({
      ...state,
      shipping: "",
    })
    transition(mode - 1)
    if (window.innerWidth < "500") {
      window.scrollTo(0, 200)
    }
  }

  return (
    <div
      className="container-sm mx-auto mt-5 mb-5"
      style={{ border: "1px", borderStyle: "solid", borderColor: "#333333" }}
    >
      <div className="row mb-5">
        <div className="col-sm-12 text-center mt-5">
          <Heading type="h1">Shipping Label Maker</Heading>
        </div>
        <div className="col-sm-12 mt-5 mb-5">
          <ProgressBar steps={steps(mode)} />
        </div>
        <div className="col-sm-12">
          <form className="needs-validation" noValidate>
            <div>
              {mode === 1 && (
                <SenderForm
                  state={state}
                  setState={setState}
                  showErrors={showErrors}
                  nextPage={nextPage}
                />
              )}
              {mode === 2 && (
                <ReceiverForm
                  state={state}
                  setState={setState}
                  showErrors={showErrors}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              )}
              {mode === 3 && (
                <PackageWeightForm
                  state={state}
                  setState={setState}
                  showErrors={showErrors}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              )}
              {mode === 4 && (
                <ShippingOptionsForm
                  state={state}
                  setState={setState}
                  showErrors={showErrors}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              )}
              {mode === 5 && (
                <ReviewAndConfirm
                  state={state}
                  prevPage={prevPage}
                  confirm={confirm}
                  setConfirm={setConfirm}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShippingLabelMaker
