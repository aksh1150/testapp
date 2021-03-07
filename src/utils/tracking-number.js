const trackingNumber = (length) => {
  let result = ""
  const characters = "0123456789"
  if (!length) {
    length = 16
  }
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  const firstFour = result.substr(0, 4)
  const secondFour = result.substr(4, 4)
  const thirdFour = result.substr(8, 4)
  const fourthFour = result.substr(12, 4)

  return `${firstFour} ${secondFour} ${thirdFour} ${fourthFour}`
}

export default trackingNumber
