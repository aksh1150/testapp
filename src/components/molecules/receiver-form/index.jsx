import React from "react"
import PropTypes from "prop-types"
import { Button, TextInput, Heading } from "../../atoms"
import {
  validateText,
  validateZipCode,
  validateAddress,
  validateState,
} from "../../../utils/validation"

const ReceiverForm = ({ state, setState, showErrors, nextPage, prevPage }) => (
  <>
    <Heading type="h2">Get Receiver's Address</Heading>
    <Heading type="h3">Enter receiver address</Heading>
    <div className="row pr-5 pl-5 mt-5">
      <div className="col-sm-12" style={{ minHeight: "300px" }}>
        <div className="row">
          <div className="col-sm-12">
            <TextInput
              id="rename"
              label="Name"
              type="text"
              errorFeedBack={showErrors && validateText(state.to.name, "Name")}
              defaultValue={state.to.name}
              onChange={(e) => {
                setState({
                  ...state,
                  to: { ...state.to, name: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-12">
            <TextInput
              id="restreet"
              label="Street"
              type="text"
              errorFeedBack={
                showErrors && validateAddress(state.to.street, "Street")
              }
              defaultValue={state.to.street}
              onChange={(e) => {
                setState({
                  ...state,
                  to: { ...state.to, street: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-6">
            <TextInput
              id="recity"
              label="City"
              type="text"
              inputSize="md"
              errorFeedBack={showErrors && validateText(state.to.city, "City")}
              defaultValue={state.to.city}
              onChange={(e) => {
                setState({
                  ...state,
                  to: { ...state.to, city: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-3">
            <TextInput
              id="restate"
              label="State"
              type="text"
              inputSize="sm"
              errorFeedBack={
                showErrors && validateState(state.to.state, "State")
              }
              defaultValue={state.to.state}
              onChange={(e) => {
                setState({
                  ...state,
                  to: { ...state.to, state: e.target.value },
                })
              }}
            />
          </div>
          <div className="col-sm-3">
            <TextInput
              id="rezip"
              label="Zip"
              type="text"
              inputSize="sm"
              errorFeedBack={showErrors && validateZipCode(state.to.zip)}
              defaultValue={state.to.zip}
              onChange={(e) => {
                setState({
                  ...state,
                  to: { ...state.to, zip: e.target.value },
                })
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center mt-5">
        <Button onClick={(event) => prevPage(event)} btnType="warning">
          Previous
        </Button>
        <Button onClick={(event) => nextPage(event)} btnType="primary">
          Next
        </Button>
      </div>
    </div>
  </>
)

ReceiverForm.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
}
export default ReceiverForm
