// There are so many Library to apply as a validation form for react
// we are use to Formik-Library => https://formik.org/docs/overview
// Formik is only use for React
// And Formik Validation is very big and lengthy so for small code we r using yup-npm => https://www.npmjs.com/package/yup
//  yup validation Schema  is compare to formik very small
// steps ⚛️
// 1 . install Formik and yup Library command is => npm i formik yup , for both downloaded

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  const onsubmitHandler = () => {
    alert("your work is submitted !");
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  });

  return (
    <div>
      <div className="container">
        <div className="section-title">
          <h2>Login</h2>
        </div>
      </div>
      <div>
        <Formik
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                name="password"
                placeholder="Your Password"
                required
              />
              <ErrorMessage name="password" component="div" />
              <button onSubmit={onsubmitHandler}>submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
