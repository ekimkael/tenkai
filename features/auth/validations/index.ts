import * as yup from "yup"

export const schema = {
  signup: yup.object().shape({
    firstname: yup.string().required("First name is a required"),
    lastname: yup.string().required("Last name is a required"),
    username: yup
      .string()
      .required()
      .matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/, "Invalid character"),
    email: yup.string().email().required("Email is a required"),
    password: yup
      .string()
      .matches(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        "Password should have 8 characters, one capital letter and one number."
      ),
  }),

  signin: yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),


  forgotPassword: yup.object().shape({
    email: yup.string().email().required(),
  }),

  resetPassword: yup.object().shape({
    password: yup
      .string()
      .matches(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        "Password should have 8 characters, one capital letter and one number."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
}



