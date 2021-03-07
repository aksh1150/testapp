import React from "react"
import { render } from "@testing-library/react"
import Heading from "../index"

describe("<Heading />", () => {
  it("should render and match the snapshot", () => {
    const children = "this is Heading"
    const {
      container: { firstChild },
    } = render(<Heading type="h1">{children}</Heading>)
    expect(firstChild).toMatchSnapshot()
  })
})
