# About `TextInput` component

## It takes seven props

1. `onChange`: This props handle onChange event which happen on input and return value.
2. `type`: It allows two input types [text, number]
3. `id`: Display id of the radio.
4. `inputSize`: Based on [sm, md] inputSize props, the width of the input change
5. `defaultValue`: Takes default values and pass into value attr
6. `errorFeedBack`: It takes a boolean or function
7. `label`: Label of the text input which render left side of the input field

## How to render `Radio` component

- Firstly, import the component
- Secondly, use that component and pass props such as: [<TextInput id="name" label="Name" type="text" errorFeedBack={boolean or fn()} defaultValue={state.from.name} onChange={handleChange} />]
