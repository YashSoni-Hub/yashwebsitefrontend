import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Login.css";
import { LoginSchema, LoginValues } from "./util";
import { BsEyeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../action-creators/userAction";
import { useAlert } from "react-alert";
import Loading from "../Loader/loading";
import { ACTION_TYPE } from "../../util/constants";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();
  const formik = useFormik({
    initialValues: LoginValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      const res = await dispatch(onLogin(values));
      if (res) history.push("/about");
    },
  });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: ACTION_TYPE.CLEAR_ERROR });
    } else if (message) {
      alert.success(message);
      dispatch({ type: ACTION_TYPE.CLEAR_MESSAGE });
    }
  }, [loading, error, message]);

  return loading ? (
    <Loading />
  ) : (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={formik.handleSubmit}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={formik.values.email}
              name="email"
              required
              onChange={formik.handleChange}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={formik.values.password}
              name="password"
              required
              onChange={formik.handleChange}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
