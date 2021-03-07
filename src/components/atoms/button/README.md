# About `Button` component

## It takes three props

1. `onClick`: This props take an onClick action which happens on the button.
2. `children`: Take children props which display as button text on button
3. `btnType`: This use in button class (For example: <button className={`btn btn-${btnType}`}>) which display different type of buttons. Those `btnTypes` are: [Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Link]

## How to render `Button` component

- Firstly, import the component
- Secondly, use that component and pass props such as: [<Button btnType="primary" onClick={handleClick}>Next</Button>]
- `btnType` props takes any value which we define above
- `onClick` props handle function which occurs on click of the button.
