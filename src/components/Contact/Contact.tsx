import "./Contact.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import contactValidationSchema from "../../Utilites/Validations/Contact";
import { BiSolidError } from "react-icons/bi";

function Contact() {
  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: contactValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contact</h3>
      <p className="contact-subtitle">Don't be shy! Hit me up! 👇</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-input-container">
          <h1>Name</h1>
          <TextField
            id="name"
            name="name"
            type="text"
            className="contact-input"
            placeholder="Enter your Name"
            hiddenLabel
            variant="filled"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            error={!!errors.name && touched.name}
            helperText={
              touched.name &&
              errors.name && (
                <div className="contact-error">
                  <BiSolidError />
                  {errors.name}
                </div>
              )
            }
            FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          />
        </div>
        <div className="contact-input-container">
          <h1>Email</h1>
          <TextField
            id="email"
            name="email"
            type="email"
            className="contact-input"
            placeholder="Enter your Email"
            hiddenLabel
            variant="filled"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={!!errors.email && touched.email}
            helperText={
              touched.email &&
              errors.email && (
                <div className="contact-error">
                  <BiSolidError />
                  {errors.email}
                </div>
              )
            }
            FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          />
        </div>
        <div className="contact-input-container">
          <h1>Message</h1>
          <TextField
            id="message"
            name="message"
            type="text"
            className="contact-textarea"
            multiline
            rows={4}
            variant="filled"
            placeholder="Enter your Message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            error={!!errors.message && touched.message}
            helperText={
              touched.message &&
              errors.message && (
                <div className="contact-error">
                  <BiSolidError />
                  {errors.message}
                </div>
              )
            }
            FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
