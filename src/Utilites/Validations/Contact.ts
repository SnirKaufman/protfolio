import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should have at least 2 characters.")
    .max(30, "Name should not exceed 30 characters.")
    .required("Please enter your name"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, "Please enter a valid email address.")

    .required("Please enter your email"),
  message: Yup.string()
    .min(10, "Message should have at least 10 characters.")
    .required("Please enter your message"),
});

export default contactValidationSchema;
