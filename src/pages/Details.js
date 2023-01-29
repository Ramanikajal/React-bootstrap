import React from "react";
import "./../utile.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

function Details() {
  const onSubmitHandler = () => {
    alert("submitted !");
  };

  let DoctorsValidationSchema = yup.object().shape({
    userId: yup
      .string()
      .required()
      .matches(/[a-z]/, "First charactor must be alpha")
      .matches(/[-]/, "Secound charactor must be  hyphens(-)")
      .matches(/[0-9]/, "and All of the rest is numerical")
      .max(7),
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
    mobile: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter valid number"
      )
      .min(10, "too short")
      .max(10, "too long")
      .required(),
    checky: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required(),
    picked: yup.string().required("Select Any categray"),
  });
  return (
    <div className="d-flex">
      <div className="Doctors">
        <h2 className="text-center">Doctor Details</h2>
        <Formik
          initialValues={{
            userId: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirm: "",
            checky: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          const
          validationSchema={DoctorsValidationSchema}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="ms-custom my-4">
                <label>Choose User Id : </label>
                <Field
                  type="text"
                  name="userId"
                  className={`Doctor-details ${
                    touched.userId && errors.userId ? "error" : "border-black"
                  }`}
                />
                <ErrorMessage name="userId" component="div" />
              </div>

              <div className="ms-custom my-4">
                <label>First Name : </label>
                <Field
                  className={`Doctor-details ${
                    touched.firstName && errors.firstName
                      ? "error"
                      : "border-black"
                  }`}
                  type="text"
                  name="firstName"
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>Last Name : </label>
                <Field
                  className={`Doctor-details ${
                    touched.lastName && errors.lastName
                      ? "error"
                      : "border-black"
                  }`}
                  type="text"
                  name="lastName"
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>Mobile :</label>
                <Field
                  className={`Doctor-details ${
                    touched.mobile && errors.mobile ? "error" : "border-black"
                  }`}
                  type="text"
                  name="mobile"
                />
                <ErrorMessage name="mobile" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>Email : </label>
                <Field
                  className={`Doctor-details ${
                    touched.email && errors.email ? "error" : "border-black"
                  }`}
                  type="text"
                  name="email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>Password : </label>
                <Field
                  type="password"
                  name="password"
                  className={`Doctor-details ${
                    touched.password && errors.password
                      ? "error"
                      : "border-black"
                  }`}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>Confirm Password : </label>
                <Field
                  type="password"
                  name="confirm"
                  className={`Doctor-details ${
                    touched.confirm && errors.confirm ? "error" : "border-black"
                  }`}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="ms-custom my-4">
                <label>GEnder :</label>
                <Field type="radio" name="picked" value="Male" />
                <label>Male</label>
                <Field type="radio" name="picked" value="Female" />
                <label>Female</label>
                <ErrorMessage name="picked" component="span" />
              </div>
              <div className="ms-custom">
                <Field
                  type="checkbox"
                  name="checky"
                  id="checky"
                  className={`Doctor-details ${
                    touched.checky && errors.checky ? "effect" : ""
                  }`}
                />
                <ErrorMessage name="checky" component="div" />
                <label
                  htmlFor="checkbox"
                  className={`Doctor-details ${
                    touched.checky && errors.checky ? "effect" : ""
                  }`}
                >
                  I agree to the Terms and Conditions
                </label>
              </div>
              <div className="d-block ms-custom my-4">
                <button
                  className="btn btn-success"
                  type="submit"
                  onSubmit={onSubmitHandler}
                >
                  Submit & Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="madication bg-primary">
        <div className="text-center">
          <h2>Medication Administration Form</h2>
          <p>For prescribed medication to be administered at nursery</p>
        </div>
        <div className="d-flex align-item-center justify-space-between">
          <Formik
            initialValues={{
              userId: "",
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              confirm: "",
              checky: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            const
            validationSchema={DoctorsValidationSchema}
          >
            {({ touched, errors }) => (
              <Form>
                <h5 className="d-block ms-custom">Childs Name</h5>
                <div className="ms-custom my-4">
                  <Field
                    className={`Medication-details ${
                      touched.firstName && errors.firstName
                        ? "error"
                        : "border-black"
                    }`}
                    type="text"
                    name="firstName"
                  />
                  <br />
                  <label>First Name : </label>
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="ms-custom my-4">
                  <Field
                    className={`Medication-details ${
                      touched.lastName && errors.lastName
                        ? "error"
                        : "border-black"
                    }`}
                    type="text"
                    name="lastName"
                  />
                  <br />
                  <label>Last Name : </label>
                  <ErrorMessage name="lastName" component="div" />
                </div>

                <div className="text-center">
                  <label>Childs date of birth</label><br/>
                  <input type="date"/>
                </div>

                <div className="d-block ms-custom my-4">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onSubmit={onSubmitHandler}
                  >
                    Submit & Continue
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Details;
