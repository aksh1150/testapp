import React from "react"
import PropTypes from "prop-types"
import { Button, Heading, Radio } from "../../atoms"
import { validateRadio } from "../../../utils/validation"

const ShippingOptionsForm = ({
  state,
  setState,
  showErrors,
  nextPage,
  prevPage,
}) => (
  <>
    <Heading type="h2">Get Shipping Options</Heading>
    <Heading type="h3">
      Choose your shipping options from (Ground and Priority)
    </Heading>
    <div className="row pr-5 pl-5 mt-5">
      <div className="col-sm-12" style={{ minHeight: "300px" }}>
        <div className="row">
          <div className="col-sm-12">
            <Radio
              id="ground"
              name="shipping"
              defaultValue="1"
              onChange={(e) => {
                setState({
                  ...state,
                  shipping: e.target.value,
                })
              }}
            >
              Ground Shipping
            </Radio>
          </div>
          <div className="col-sm-12 mt-4">
            <Radio
              id="priority"
              name="shipping"
              defaultValue="2"
              onChange={(e) => {
                setState({
                  ...state,
                  shipping: e.target.value,
                })
              }}
              errorFeedBack={
                showErrors && validateRadio(state.shipping, "Shipping")
              }
            >
              Priority Shipping
            </Radio>
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

ShippingOptionsForm.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
}
export default ShippingOptionsForm
