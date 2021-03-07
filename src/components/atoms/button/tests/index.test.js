import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Button from "../index"

describe("<Button />", () => {
  it("should render and match the snapshot", () => {
    const children = "Next"
    const handleClick = (e) => {
      console.log(e)
    }
    const {
      container: { firstChild },
    } = render(
      <Button onClick={handleClick} btnType="primary">
        {children}
      </Button>
    )
    expect(firstChild).toMatchSnapshot()
  })

  it("should fireEvent", () => {
    const children = "Next"
    const handleClick = jest.fn()
    render(
      <Button onClick={handleClick} btnType="warning">
        {children}
      </Button>
    )
    fireEvent.click(screen.getByText(/Next/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
