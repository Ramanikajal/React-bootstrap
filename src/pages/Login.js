// There are so many Library to apply as a validation form for react
// we are use to Formik-Library => https://formik.org/docs/overview
// Formik is only use for React
// And Formik Validation is very big and lengthy so for small code we r using yup-npm => https://www.npmjs.com/package/yup
//  yup validation Schema  is compare to formik very small
// steps ⚛️
// 1 . install Formik and yup Library command is => npm i formik yup , for both downloaded

import React from "react";
import "../utile.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  const onsubmitdata = () => {
    alert("Submitted !");
  };

  const validation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });

  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className="first-div p-5 bg-primary">
        <div className="box">
          <img src="images/login.jpg" className="rounded-3" />
        </div>
      </div>
      <div className="last-div p-5 bg-primary">
        {/* Login Heading  */}

        <div className="section-title">
          <h2>Login</h2>
        </div>

        {/* Login codeing  */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validation}
        >
          {(props) => (
            <Form>
              <div className="d-flex justify-content-center">
                <Field
                className="p-1"
                  style={{ width: "300px" }}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="d-flex justify-content-center my-5">
                <Field
                className="p-1"
                  style={{ width: "300px" }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="d-flex justify-content-center ">
                <button type="submit" onSubmit={onsubmitdata}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
