import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Tab, Tabs, Box, Typography, TextField } from "@mui/material";

const UserSchema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string(),
});

const DriverSchema = Yup.object().shape({
  driver_id: Yup.string().required("Driver ID is required"),
  driver_name: Yup.string(),
  vehicle_number: Yup.string().required("Vehicle Number is required"),
});

const validationSchemas = [UserSchema, DriverSchema];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values) => {
    // Send the form values to the API
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        phone: "",
        address: "",
        driver_id: "",
        driver_name: "",
        vehicle_number: "",
      }}
      validationSchema={validationSchemas[activeStep]}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Tabs
            value={activeStep}
            onChange={(e, step) => setActiveStep(step)}
            aria-label="multi-step form"
          >
            <Tab label="User" />
            <Tab label="Driver" />
          </Tabs>

          <Box my={2}>
            {activeStep === 0 && (
              <div>
                <Field
                  component={TextField}
                  name="username"
                  type="text"
                  label="Username"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                  required
                />
                <Field
                  component={TextField}
                  name="phone"
                  type="text"
                  label="Phone"
                  fullWidth
                  required
                />
                <Field
                  component={TextField}
                  name="address"
                  type="text"
                  label="Address"
                  fullWidth
                />
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <Field
                  component={TextField}
                  name="driver_id"
                  type="text"
                  label="Driver ID"
                  fullWidth
                  required
                />
                <Field
                  component={TextField}
                  name="driver_name"
                  type="text"
                  label="Driver Name"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="vehicle_number"
                  type="text"
                  label="Vehicle Number"
                  fullWidth
                  required
                />
              </div>
            )}
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === validationSchemas.length - 1 ? (
              <Button type="submit" color="primary" disabled={isSubmitting}>
                Submit
              </Button>
            ) : (
              <Button color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
