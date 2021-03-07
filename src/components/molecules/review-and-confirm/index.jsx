import React from "react"
import PropTypes from "prop-types"
import { Button, Heading } from "../../atoms"
import trackingNumber from "../../../utils/tracking-number"
import shippingRate from "../../../utils/shipping-rate"
import labelPrint from "../../../utils/shipping-label-print"

const ReviewAndConfirm = ({ state, prevPage, confirm, setConfirm }) => (
  <>
    <Heading type="h2">Confirm and Review</Heading>
    <Heading type="h3">Confirm & Review your order details</Heading>
    <div
      className="shippingLabel"
      id="printArea"
      style={{
        border: "5px",
        borderStyle: "dashed",
        borderColor: "#525252",
      }}
    >
      <div className="row pr-5 pl-5 mt-5">
        <div className="col-sm-6">
          <Heading type="h5">
            <u>TO:</u>
          </Heading>
          <Heading type="h6">{state.to.name.toUpperCase()}</Heading>
          <Heading type="h6">{state.to.street.toUpperCase()}</Heading>
          <Heading type="h6">
            {`${state.to.city.toUpperCase()} ${state.to.state.toUpperCase()} ${
              state.to.zip
            }`}{" "}
          </Heading>
        </div>
        <div className="col-sm-6">
          <Heading type="h5">
            <u>FROM:</u>
          </Heading>
          <Heading type="h6">{state.from.name.toUpperCase()}</Heading>
          <Heading type="h6">{state.from.street.toUpperCase()}</Heading>
          <Heading type="h6">
            {`${state.from.city.toUpperCase()} ${state.from.state.toUpperCase()} ${
              state.from.zip
            }`}{" "}
          </Heading>
        </div>
        <div className="col-sm-12 mt-5">
          <img
            src={require("../../../images/barcode-png.webp").default}
            className="img-fluid"
            alt="BarCode"
            style={{ height: "120px" }}
          />
          <div className="mt-3">
            <Heading type="h6">{`TRACKING NUMBER ${trackingNumber(
              16
            )}`}</Heading>
          </div>
        </div>
        <div className="col-sm-12 mt-5">
          <Heading type="h6">{`SELECTED SHIPPING: ${
            state.shipping === "1" ? "GROUND" : "PRIORITY"
          } SHIPPING`}</Heading>
        </div>
        <div className="col-sm-12 mt-4 mb-4">
          <Heading type="h5">
            <b>TOTAL AMOUNT:</b>
          </Heading>
          <p type="h6">
            <i>
              (Shipping Rate (0.4) * Weight ({state.weight}) * Shipping Option
              (${state.shipping === "1" ? "1" : "1.5"}))
            </i>
          </p>
          <Heading type="h3">
            {`$${shippingRate(state.weight, state.shipping).toFixed(2)}`}
          </Heading>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-sm-12 mt-4">
        <Heading type="h6">
          <b>NOTE:</b> By clicking <i>"Confirm & Click"</i> button you agree our
          term and conditions.
        </Heading>
      </div>
      <div className="col-sm-12 text-center mt-5">
        <Button onClick={(event) => prevPage(event)} btnType="warning">
          Previous
        </Button>

        <Button
          onClick={(e) => {
            setConfirm(!confirm)
            labelPrint(e)
          }}
          btnType="primary"
        >
          Confirm & Print
        </Button>
      </div>
    </div>
  </>
)
ReviewAndConfirm.propTypes = {
  state: PropTypes.object.isRequired,
  prevPage: PropTypes.func.isRequired,
}
export default ReviewAndConfirm
