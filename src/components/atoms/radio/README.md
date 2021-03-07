# About `Radio` component

## It takes six props

1. `onChange`: This props handle onChange event which happen on radio input.
2. `children`: Take children props which display as radio label.
3. `id`: Display id of the radio.
4. `name`: Display name of the radio
5. `defaultValue`: Takes default values and pass into value attr
6. `errorFeedBack`: It returns a boolean or function

## How to render `Radio` component

- Firstly, import the component
- Secondly, use that component and pass props such as: [<Radio id="ground" name="shipping" defaultValue="1" onChange={handleChange} errorFeedBack={boolean or fn()}>Ground Shipping</Radio>]
