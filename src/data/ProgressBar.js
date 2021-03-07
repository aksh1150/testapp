import {
  faUser,
  faDolly,
  faShippingFast,
  faBalanceScale,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons"

const steps = (mode) => [
  {
    stepSuccess: mode === 1 || mode > 1 ? "wait" : "empty",
    stepId: "step-1",
    stepName: "Sender's Address",
    stepIcon: faUser,
  },
  {
    stepSuccess: mode === 2 || mode > 2 ? "wait" : "empty",
    stepId: "step-2",
    stepName: "Receiver's Address",
    stepIcon: faDolly,
  },
  {
    stepSuccess: mode === 3 || mode > 3 ? "wait" : "empty",
    stepId: "step-3",
    stepName: "Package Weight",
    stepIcon: faBalanceScale,
  },
  {
    stepSuccess: mode === 4 || mode > 4 ? "wait" : "empty",
    stepId: "step-4",
    stepName: "Shipping Options",
    stepIcon: faShippingFast,
  },
  {
    stepSuccess: mode === 5 || mode > 5 ? "wait" : "empty",
    stepId: "step-5",
    stepName: "Confirm Order",
    stepIcon: faClipboardCheck,
  },
]

export default steps
