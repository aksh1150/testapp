import React from "react"
import PropTypes from "prop-types"
import { Button, TextInput, Heading } from "../../atoms"
import { validateDecimalNumbers } from "../../../utils/validation"

const PackageWeightForm = ({
  state,
  setState,
  showErrors,
  nextPage,
  prevPage,
}) => (
  <>
    <Heading type="h2">Get Package Weight</Heading>
    <Heading type="h3">Enter package weight</Heading>
    <div className="row pr-5 pl-5 mt-5">
      <div className="col-sm-12" style={{ minHeight: "300px" }}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <TextInput
              id="weight"
              label="Weight"
              type="number"
              errorFeedBack={
                showErrors && validateDecimalNumbers(state.weight, "Weight")
              }
              inputSize="md"
              defaultValue={state.weight}
              onChange={(e) => {
                setState({
                  ...state,
                  weight: e.target.value,
                })
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center mt-5">
        <Button onClick={(event) => prevPage(event)} btnType="warning">
          Preview
        </Button>
        <Button onClick={(event) => nextPage(event)} btnType="primary">
          Next
        </Button>
      </div>
    </div>
  </>
)

PackageWeightForm.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
}

export default PackageWeightForm
