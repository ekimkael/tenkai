import * as yup from "yup"

export const schema = {
  settings: yup.object().shape({
    firstname: yup.string().required("First name is a required"),
    lastname: yup.string().required("Last name is a required"),
    username: yup
      .string()
      .required()
      .matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/, "Invalid character"),
    email: yup.string().email().required("Email is a required"),
  })
}
