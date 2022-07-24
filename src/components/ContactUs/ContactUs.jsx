import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ContactUs.css";
// import { useAlert } from "react-alert";
import { useFormik } from "formik";
import { ContactUsSchema, ContactUsValues } from "./util";

const ContactUs = () => {
  //   const dispatch = useDispatch();
  //   const alert = useAlert();

  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //     }
  //     if (alertMessage) {
  //       alert.success(alertMessage);
  //     }
  //   }, [alert, error, alertMessage, dispatch]);

  const formik = useFormik({
    initialValues: ContactUsValues,
    validationSchema: ContactUsSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    console.log("formik.errors", formik.errors);
  }, [formik.errors]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={formik.handleSubmit}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <div>{formik.touched.name && formik.errors.name}</div>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div>{formik.touched.message && formik.errors.message}</div>
          <textarea
            placeholder="Message"
            required
            name="message"
            cols="30"
            rows="10"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
          <div>{formik.touched.message && formik.errors.message}</div>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
