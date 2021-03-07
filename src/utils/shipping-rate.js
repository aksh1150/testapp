const shippingRate = (weight, shippingOption) => {
  const shippingRate = 0.4
  const setWeight = weight || 1
  const shippingCost =
    parseFloat(setWeight) * shippingRate * (shippingOption === "1" ? 1 : 1.5)

  return shippingCost
}

export default shippingRate
