import * as Yup from "yup";

export const LoginValues = {
  email: "",
  password: "",
};

export const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
