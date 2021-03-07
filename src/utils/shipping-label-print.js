const labelPrint = (e) => {
  e.preventDefault()

  const printContents = document.getElementById("printArea").innerHTML
  const originalContents = document.body.innerHTML

  document.body.innerHTML = printContents
  window.print()
  document.body.innerHTML = originalContents
}
export default labelPrint
