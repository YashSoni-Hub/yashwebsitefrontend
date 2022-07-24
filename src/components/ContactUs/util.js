import * as Yup from "yup";

export const ContactUsValues = {
  name: "",
  email: "",
  message: "",
};

export const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
