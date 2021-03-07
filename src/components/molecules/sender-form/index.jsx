import React from "react"
import PropTypes from "prop-types"
import { Button, TextInput, Heading } from "../../atoms"
import {
  validateText,
  validateZipCode,
  validateAddress,
  validateState,
} from "../../../utils/validation"

const SenderForm = ({ state, setState, showErrors, nextPage }) => (
  <>
    <Heading type="h2">Get Sender's Address</Heading>
    <Heading type="h3">Enter sender address</Heading>
    <div className="row pr-5 pl-5 mt-5">
      <div className="col-sm-12" style={{ minHeight: "300px" }}>
        <div className="row">
          <div className="col-sm-12">
            <TextInput
              id="name"
              label="Name"
              type="text"
              errorFeedBack={
                showErrors && validateText(state.from.name, "Name")
              }
              defaultValue={state.from.name}
              onChange={(e) => {
                setState({
                  ...state,
                  from: { ...state.from, name: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-12">
            <TextInput
              id="street"
              label="Street"
              type="text"
              errorFeedBack={
                showErrors && validateAddress(state.from.street, "Street")
              }
              defaultValue={state.from.street}
              onChange={(e) => {
                setState({
                  ...state,
                  from: { ...state.from, street: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              id="city"
              label="City"
              type="text"
              inputSize="md"
              errorFeedBack={
                showErrors && validateText(state.from.city, "City")
              }
              defaultValue={state.from.city}
              onChange={(e) => {
                setState({
                  ...state,
                  from: { ...state.from, city: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-3">
            <TextInput
              id="state"
              label="State"
              type="text"
              inputSize="sm"
              errorFeedBack={
                showErrors && validateState(state.from.state, "State")
              }
              defaultValue={state.from.state}
              onChange={(e) => {
                setState({
                  ...state,
                  from: { ...state.from, state: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-3">
            <TextInput
              id="zip"
              label="Zip"
              type="text"
              inputSize="sm"
              errorFeedBack={showErrors && validateZipCode(state.from.zip)}
              defaultValue={state.from.zip}
              onChange={(e) => {
                setState({
                  ...state,
                  from: { ...state.from, zip: e.target.value },
                })
              }}
            />
          </div>
        </div>
      </div>

      <div className="col-sm-12 text-center mt-5">
        <Button onClick={(event) => nextPage(event)} btnType="primary">
          Next
        </Button>
      </div>
    </div>
  </>
)

SenderForm.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
}

export default SenderForm
