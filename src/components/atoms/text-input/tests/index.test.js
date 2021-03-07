import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TextInput from "../index"

describe("<TextInput />", () => {
  it("should render and match the snapshot", () => {
    const id = "ship1"
    const onChange = () => {
      console.log("2")
    }

    const errorFeedBack = false
    const label = "Name"
    const {
      container: { firstChild },
    } = render(
      <TextInput
        label={label}
        onChange={onChange}
        id={id}
        type="text"
        errorFeedBack={errorFeedBack}
      />
    )
    expect(firstChild).toMatchSnapshot()
  })

  it("should fireEvent", () => {
    const id = "ship1"
    const errorFeedBack = false
    const label = "Name"
    const onChange = jest.fn()
    const { getByPlaceholderText } = render(
      <TextInput
        label={label}
        onChange={onChange}
        id={id}
        type="text"
        errorFeedBack={errorFeedBack}
      />
    )
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "new value" },
    })
    expect(getByPlaceholderText("Name").value).toBe("new value")
  })
})
