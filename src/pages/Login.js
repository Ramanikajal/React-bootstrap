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
    password: yup
      .string()
      .required()
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .min(8, "Password must be 8 characters long"),
  });

  const FormSchema = yup.object().shape({
    email: yup.string().email().required(),
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .min(2)
      .required(),
    lastName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid Last name")
      .max(40)
      .min(2)
      .required(),
    password: yup
      .string()
      
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Must match password field value")
      .required(),
  });
  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className="first-div p-5 bg-primary">
        {/* Register Heading  */}

        <div className="section-title">
          <h2>Register</h2>
        </div>
        <p className="text-center">
          Create your account. It's free and only takes a minute.
        </p>

        {/* Register Coding */}
        <Formik
          initialValues={{ email: "", password: "" , confirm:"" , firstName : "" , lastName:""}}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem("RegisterDetails", JSON.stringify(values));
          }}
          validationSchema={FormSchema}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="d-flex justify-content-center">
                <Field
                  className={`Register-input p-1 ${
                    touched.firstName && errors.firstName
                      ? "error"
                      : "border-black"
                  }`}
                  style={{ width: "300px" }}
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div className="d-flex justify-content-center my-5">
                <Field
                  className={`Register-input p-1 ${
                    touched.lastName && errors.lastName
                      ? "error"
                      : "border-black"
                  }`}
                  style={{ width: "300px" }}
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last name"
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div className="d-flex justify-content-center">
                <Field
                  className={`Register-input p-1 ${
                    touched.email && errors.email ? "error" : "border-black"
                  }`}
                  style={{ width: "300px" }}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="d-flex justify-content-center my-5">
                <Field
                  style={{ width: "300px" }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`Register-input ${
                    touched.password && errors.password
                      ? "error"
                      : "border-black"
                  }`}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="d-flex justify-content-center my-5">
                <Field
                  style={{ width: "300px" }}
                  type="password"
                  name="confirm"
                  placeholder="Enter your confirm password"
                  className={`Register-input ${
                    touched.confirm && errors.confirm
                      ? "error"
                      : "border-black"
                  }`}
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
            localStorage.setItem("user", JSON.stringify(values));
          }}
          validationSchema={validation}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="d-flex justify-content-center">
                <Field
                  className={`login-input p-1 ${
                    touched.email && errors.email ? "error" : "border-black"
                  }`}
                  style={{ width: "300px" }}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="d-flex justify-content-center my-5">
                <Field
                  style={{ width: "300px" }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`login-input ${
                    touched.password && errors.password
                      ? "error"
                      : "border-black"
                  }`}
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
