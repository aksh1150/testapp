import React from "react"
import { render } from "@testing-library/react"
import Radio from "../index"

describe("<Radio />", () => {
  it("should render and match the snapshot", () => {
    const children = "Priority Shipping"
    const id = "ship1"
    const name = "shipping"
    const onChange = () => {
      console.log("2")
    }
    const defaultValue = "2"
    const errorFeedBack = false

    const {
      container: { firstChild },
    } = render(
      <Radio
        onChange={onChange}
        id={id}
        name={name}
        defaultValue={defaultValue}
        errorFeedBack={errorFeedBack}
      >
        {children}
      </Radio>
    )
    expect(firstChild).toMatchSnapshot()
  })
})
