import "./Contact.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import contactValidationSchema from "../../Utilites/Validations/Contact";
import { BiSolidError } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

interface InitialValues {
  name: string;
  email: string;
  message: string;
}

interface TextFieldType {
  id: keyof InitialValues;
  type: string;
  placeholder: string;
  rows?: number;
}

const CONTACT_TITLE = "contact";
const CONTACT_SUBTITLE = "Don't be shy! Hit me up! 👇";

function Contact() {
  const formRef: any = useRef();

  const sendEmail = (resetForm: () => void) => {
    const loadingToast = toast.loading("Loading...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
      () => {
        toast.success("Email sent successfully!", {
          id: loadingToast,
        });
        resetForm();
      },
      (error) => {
        toast.error(error.text, {
          id: loadingToast,
        });
      }
    );
  };

  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: contactValidationSchema,
      onSubmit: (values, { resetForm }) => {
        sendEmail(resetForm);
      },
    });

  const textFieldProps = ({
    id,
    type,
    placeholder,
    rows = 1,
  }: TextFieldType) => {
    return (
      <TextField
        id={id}
        name={id}
        type={type}
        rows={rows}
        multiline={rows > 1}
        className="contact-input"
        placeholder={placeholder}
        hiddenLabel
        variant="filled"
        onChange={handleChange}
        value={values[id]}
        onBlur={handleBlur}
        error={!!errors[id] && touched[id]}
        helperText={
          touched[id] &&
          errors[id] && (
            <span className="contact-error">
              <BiSolidError />
              {errors[id]}
            </span>
          )
        }
        FormHelperTextProps={{ style: { fontSize: "1rem" } }}
      />
    );
  };

  const textFieldsArray: TextFieldType[] = [
    { id: "name", type: "text", placeholder: "Enter your name" },
    { id: "email", type: "email", placeholder: "Enter your email" },
    {
      id: "message",
      type: "text",
      placeholder: "Enter your message",
      rows: 4,
    },
  ];

  return (
    <div className="contact-container">
      <h3 className="contact-title">{CONTACT_TITLE}</h3>
      <p className="contact-subtitle">{CONTACT_SUBTITLE}</p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        {textFieldsArray.map(({ id, type, placeholder, rows }) => (
          <div key={id} className="contact-input-container">
            <h1 className="contact-input-title">{id}</h1>
            {textFieldProps({ id, type, placeholder, rows })}
          </div>
        ))}

        <button className="btn contact-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
