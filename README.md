# About the `SHIPPING-LABEL-MAKER` project

** About the app **

1. User can add `sender` and `receiver` address in the form.
2. We validate each `input` fields in the form.
3. Use `visual icons` on the progress bar.
4. User can add package `weight`.
5. User can choose `shipping` option.
6. Based on shipping option and package weight, we calculate shipping charge.
7. On `Confirm and Review` page we display following information
   -- Display `sender` information on `from` division.
   -- Display `receiver` information on `to` division.
   -- Display `barcode` image.
   -- Display `random tracking number`
   -- Selected shipping option
   -- Total rate of the shipping and also display how we calculate that rate.
   -- User can `Confirm & Print` shipping label from that screen.
8. User can go `Previous` screen from any of those five screens.

** IMPORTANT NOTES [Technical Information] **

## `components` directory: Components are created in three major directory for this project

- `atoms`: This has number of small components such as `button`, `InputText`, etc.
  -- Each component has their own `README.md` file which tells you how to use and render that particular component in the app.
  -- Each components has their own `test cases` in this directory.

- `molecules`: Use components from `atoms` and create a new component.

- `organisms`: Use components from `molecules` and create a new High Order Component [HOC]

[NOTE:] Props are validated in each component using `PropTypes`.

### `data` directory: This is application data which we use for render some component. such as `progress-bar` component use array of data to render it on the screen so we add those data here in this directory in `ProgressBar.js` file.

### `hooks` directory: When I create a new `hooks` I stored them in this directory. The new custom hook `useVisualMode` is created in this dir of `useVisualMode.js` file. This hook use to make transaction of wizard.

### `images` directory: This dir store images of the application.

### `utils` directory: This directory store `utils` or `helper` functions which helps to run our application smooth. I created number of utils functions here to run our application. Those are:

- `labelPrint` [shipping-label-print.js]: Using this function user can `print` their shipping labels.
- `shippingRate` [shipping-rate.js]: This function calculate shipping cost based on entered `weight` and selected `shipping option`.
- `trackingNumber` [tracking-number.js]: This function auto generate `16 digits tracking` number at review and confirm page [step-5] to track package.
- [validation.js]: This file validate our `input` fields. It has different validation functions such as,
  -- `validateText` to validate normal text field. Minimum two characters required for each input.
  -- `validateRadio` to validate radio options.
  -- `validateDecimalNumbers` to validate decimal values in input which allow only integers and dot(.).
  -- `validateZipCode` to validate zip code which only allow 5 integers.
  -- `validateAddress` to validate street field in the form. This require more than eight characters in the input.
  -- `validateState` to validate state field which only allows two characters.

** Packages Used **

1. `bootstrap` for styling
2. `fortawesome` for icons
3. `testing-library` for test
